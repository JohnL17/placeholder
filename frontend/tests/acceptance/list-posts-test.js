import setupMirage from "ember-cli-mirage/test-support/setup-mirage";
import { module, test } from "qunit";
import { visit, currentURL, click, fillIn } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import startApp from "../helpers/start-app";
import { authenticateSession } from "ember-simple-auth/test-support";

module("Acceptance | list posts", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    this.application = startApp();
  });

  test("should show about as the home page", async function(assert) {
    assert.expect(1);

    await visit("/");

    assert.equal(currentURL(), "/about", "should redirect automatically");
  });

  test("should link to posts page", async function(assert) {
    assert.expect(1);

    await visit("/");

    await click("[data-test-nav-posts]");

    assert.equal(currentURL(), "/posts", "should navigate to posts");
  });

  test("should list all posts", async function(assert) {
    assert.expect(1);

    server.createList("post", 10);

    await visit("/posts");

    assert.dom(".uk-card").exists({ count: 10 });
  });

  test("should list all comments for selected post.", async function(assert) {
    assert.expect(2);

    server.create("post");

    server.createList("comment", 10);

    await visit("/posts/1");

    assert.equal(currentURL(), "/posts/1", "should navigate to show route");

    assert.dom("[data-test-comment]").exists({ count: 10 });
  });

  test("should show details for a selected post.", async function(assert) {
    assert.expect(3);

    server.create("post");

    await visit("/posts/1");

    assert.equal(currentURL(), "/posts/1", "should navigate to show route");

    assert.dom("[data-test-post-title").hasText("Post 0");

    assert.dom("[data-test-post-body]").hasText("Hello World");
  });

  test("should link to gallery page", async function(assert) {
    assert.expect(1);

    await visit("/");

    await click("[data-test-nav-gallery]");

    assert.equal(currentURL(), "/gallery", "should navigate to posts");
  });

  test("should list all galleries", async function(assert) {
    assert.expect(1);

    server.createList("album", 10);

    await visit("/gallery");

    assert.dom("[data-test-galleries]").exists({ count: 10 });
  });

  test("should list all photos for selected album.", async function(assert) {
    assert.expect(2);

    server.create("album");

    server.createList("photo", 10);

    await visit("/gallery/1");

    assert.equal(currentURL(), "/gallery/1", "should navigate to show route");

    assert.dom("[data-test-photo]").exists({ count: 10 });
  });

  test("should link to login page", async function(assert) {
    assert.expect(1);

    await visit("/");

    await click("[data-test-nav-login]");

    assert.equal(currentURL(), "/login", "should navigate to login");
  });

  test("should link to registration page", async function(assert) {
    assert.expect(1);

    await visit("/");

    await click("[data-test-nav-registration]");

    assert.equal(
      currentURL(),
      "/registration",
      "should navigate to registration"
    );
  });

  test("log a user in", async function(assert) {
    assert.expect(2);

    server.create("user");

    await authenticateSession();

    await visit("/");

    assert.dom("[data-test-nav-login]").doesNotExist();

    assert.dom("[data-test-nav-logout]").exists();
  });

  test("check activation url", async function(assert) {
    assert.expect(1);

    server.create("user");

    await visit("/activate/1/123qwe");

    assert.equal(currentURL(), "/activate/1/123qwe", "check activation url");
  });

  test("the user can access the user profile", async function(assert) {
    assert.expect(1);

    server.create("user");

    await authenticateSession();

    await visit("/");

    await click("[data-test-nav-me]");

    assert.equal(currentURL(), "/me", "The user can access the user profile");
  });

  test("log a user out", async function(assert) {
    assert.expect(1);

    server.create("user");

    await authenticateSession();

    await visit("/");

    await click("[data-test-nav-logout]");

    assert.equal(currentURL(), "/about", "should navigate to about");
  });

  test("the user can create a post", async function(assert) {
    assert.expect(2);

    server.create("user");

    await authenticateSession();

    await visit("/");

    await click("[data-test-nav-create-post]");

    await fillIn("[data-test-post-title]", "My new post");

    await fillIn("[data-test-post-body]", "This is a test post");

    await click("[data-test-post-create-button]");

    assert.dom("[data-test-post-title='1']").hasText("My new post");

    assert.dom("[data-test-post-body='1']").hasText("This is a test post");
  });

  test("the user can edit a post", async function(assert) {
    assert.expect(2);

    server.create("user");

    server.create("post");

    await authenticateSession();

    await visit("/posts/1");

    await click("[data-test-edit-post]");

    await fillIn("[data-test-post-edit-title]", "Edited post");

    await fillIn("[data-test-post-edit-body]", "Edited message");

    await click("[data-test-edit-post-button]");

    await visit("/posts");

    assert.dom("[data-test-post-title='1']").hasText("Edited post");

    assert.dom("[data-test-post-body='1']").hasText("Edited message");
  });

  test("the user can delete a post", async function(assert) {
    assert.expect(2);

    server.create("user");

    server.createList("post", 10);

    await authenticateSession();

    await visit("/posts/10");

    await click("[data-test-delete-post-button]");

    assert.dom('[data-test-posts="10"]').doesNotExist();

    assert.equal(currentURL(), "/posts", "Should navigate to posts");
  });

  test("the user can create a comment in a post", async function(assert) {
    assert.expect(3);

    server.create("user");

    server.create("post");

    await authenticateSession();

    await visit("/posts/1");

    await click("[data-test-create-comment]");

    await fillIn("[data-test-comment-title]", "My new comment");

    await fillIn("[data-test-comment-email]", "My email");

    await fillIn("[data-test-comment-message]", "My message");

    await click("[data-test-create-comment-button]");

    await visit("/posts/1");

    assert.dom("[data-test-comment-title='1']").hasText("My new comment");

    assert.dom("[data-test-comment-email='1']").hasText("My email");

    assert.dom("[data-test-comment-body='1']").hasText("My message");
  });

  test("the user can create a gallery", async function(assert) {
    assert.expect(2);

    server.create("user");

    await authenticateSession();

    await visit("/");

    await click("[data-test-nav-create-gallery]");

    assert.equal(
      currentURL(),
      "/gallery/new",
      "Should navigate to create a gallery"
    );

    await fillIn("[data-test-gallery-title]", "My new gallery");

    await click("[data-test-create-gallery-button]");

    assert.dom("[data-test-galleries-title='1']").hasText("My new gallery");
  });

  test("the user can edit a gallery", async function(assert) {
    assert.expect(1);

    server.create("user");

    server.create("album");

    await authenticateSession();

    await visit("/gallery/1");

    await click("[data-test-edit-gallery]");

    await fillIn("[data-test-edit-gallery-title]", "Edited gallery");

    await click("[data-test-edit-gallery-button]");

    assert.dom("[data-test-galleries-title='1']").hasText("Edited gallery");
  });

  test("the user can upload a picture to a gallery", async function(assert) {
    assert.expect(1);

    server.create("user");

    server.create("album");

    await authenticateSession();

    await visit("/gallery/1");

    await click("[data-test-upload]");

    await fillIn("[data-test-photo-title]", "Test photo");

    await fillIn("[data-test-photo-url]", "example.jpg");

    await click("[data-test-upload-photo-button]");

    await visit("/gallery/1");

    assert.dom("[data-test-photo='1']").exists();
  });

  test("the user can delete a gallery", async function(assert) {
    assert.expect(2);

    server.create("user");

    server.createList("album", 10);

    await authenticateSession();

    await visit("/gallery/10");

    await click("[data-test-delete-gallery-button]");

    assert.dom('[data-test-gallery="10"]').doesNotExist();

    assert.equal(currentURL(), "/gallery", "Should navigate to galleries");
  });
});
