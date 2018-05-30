import setupMirage from "ember-cli-mirage/test-support/setup-mirage";
import { module, test } from "qunit";
import { visit, currentURL, click, fillIn } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import startApp from "../helpers/start-app";
import destroyApp from "../helpers/destroy-app";
import defaultScenario from "../../mirage/scenarios/default";
import { authenticateSession } from "ember-simple-auth/test-support";

module("Acceptance | list posts", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    this.application = startApp();
  });

  hooks.afterEach(function() {
    destroyApp(this.application);
  });

  test("should show about as the home page", async function(assert) {
    assert.expect(1);

    await visit("/");

    assert.equal(currentURL(), "/about", "should redirect automatically");
  });

  test("should link to posts page", async function(assert) {
    assert.expect(1);

    await visit("/");

    await click(".menu-posts");

    assert.equal(currentURL(), "/posts", "should navigate to posts");
  });

  test("should list all posts", async function(assert) {
    assert.expect(1);

    defaultScenario(server);

    await visit("/posts");

    assert.equal(find(".uk-card").length, 10);
  });

  test("should list all comments for selected post.", async function(assert) {
    assert.expect(2);

    defaultScenario(server);

    await visit("/posts/1");

    assert.equal(currentURL(), "/posts/1", "should navigate to show route");

    assert.equal(find("article").length, 10);
  });

  test("should show details for a selected post.", async function(assert) {
    assert.expect(3);

    defaultScenario(server);

    await visit("/posts/1");

    assert.equal(currentURL(), "/posts/1", "should navigate to show route");

    assert.dom(".uk-card-title").hasText("Post 0");

    assert.dom("p").hasText("Hello World");
  });

  test("should link to gallery page", async function(assert) {
    assert.expect(1);

    await visit("/");

    await click(".menu-galleries");

    assert.equal(currentURL(), "/gallery", "should navigate to posts");
  });

  test("should list all galleries", async function(assert) {
    assert.expect(1);

    defaultScenario(server);

    await visit("/gallery");

    assert.equal(find(".uk-card").length, 10);
  });

  test("should list all photos for selected album.", async function(assert) {
    assert.expect(2);

    defaultScenario(server);

    await visit("/gallery/1");

    assert.equal(currentURL(), "/gallery/1", "should navigate to show route");

    assert.equal(find("img").length, 1);
  });

  test("should link to login page", async function(assert) {
    assert.expect(1);

    await visit("/");

    await click(".menu-login");

    assert.equal(currentURL(), "/login", "should navigate to login");
  });

  test("should link to registration page", async function(assert) {
    assert.expect(1);

    await visit("/");

    await click(".menu-registration");

    assert.equal(
      currentURL(),
      "/registration",
      "should navigate to registration"
    );
  });

  test("log a user in", async function(assert) {
    assert.expect(2);

    defaultScenario(server);

    await authenticateSession();

    await visit("/");

    assert.equal(
      find(".menu-login").length > 0,
      false,
      "An authenticated user should not see the login button"
    );
    assert.equal(
      find(".menu-logout").length > 0,
      true,
      "An authenticated user should see the logout button"
    );
  });

  test("check activation url", async function(assert) {
    assert.expect(1);

    defaultScenario(server);

    await visit("/activate/1/123qwe");

    assert.equal(currentURL(), "/activate/1/123qwe", "check activation url");
  });

  test("the user can access the user profile", async function(assert) {
    assert.expect(1);

    defaultScenario(server);

    await authenticateSession();

    await visit("/");

    await click(".menu-me");

    assert.equal(currentURL(), "/me", "The user can access the user profile");
  });

  test("log a user out", async function(assert) {
    assert.expect(1);

    defaultScenario(server);

    await authenticateSession();

    await visit("/");

    await click(".menu-logout");

    assert.equal(currentURL(), "/about", "should navigate to about");
  });

  test("the user can create a post", async function(assert) {
    assert.expect(2);

    defaultScenario(server);

    await authenticateSession();

    await visit("/posts/new");

    await fillIn(".uk-input", "My new post");

    await fillIn(".uk-textarea", "This is a test post");

    await click(".uk-button");

    assert.dom(".uk-card-title").hasText("My new post");
    assert.dom(".uk-card-body").hasText("This is a test post");
  });

  test("the user can edit a post", async function(assert) {
    assert.expect(2);

    defaultScenario(server);

    await authenticateSession();

    await visit("/posts/1");

    await click(".edit-post");

    await fillIn(".uk-input", "Edited post");

    await fillIn(".uk-textarea", "Edited message");

    await click(".uk-button");

    await visit("/posts");

    assert.dom(".uk-card-title").hasText("Edited post");
    assert.dom(".uk-card-body").hasText("Edited message");
  });

  test("the user can delete a post", async function(assert) {
    assert.expect(2);

    defaultScenario(server);

    await authenticateSession();

    await visit("/posts/10");

    await click(".uk-button-danger");

    assert.dom('[data-test-posts="10"]').doesNotExist();
    assert.equal(currentURL(), "/posts", "Should navigate to posts");
  });

  test("the user can create a comment in a post", async function(assert) {
    assert.expect(3);

    defaultScenario(server);

    await authenticateSession();

    await visit("/posts/1");

    await click(".uk-margin-small-right");

    await fillIn(".comment-title", "My new comment");

    await fillIn(".comment-email", "My email");

    await fillIn(".comment-message", "My message");

    await click(".uk-button");

    await visit("/posts/1");

    assert.equal(
      find("article.uk-comment h4.uk-comment-title:last").text(),
      "My new comment"
    );
    assert.equal(
      find("article.uk-comment ul.uk-comment-meta li:last").text(),
      "My email"
    );
    assert.equal(
      find("article.uk-comment div.uk-comment-body p:last").text(),
      "My message"
    );
  });

  test("the user can create a gallery", async function(assert) {
    assert.expect(2);

    defaultScenario(server);

    await authenticateSession();

    await visit("/gallery/new");

    assert.equal(
      currentURL(),
      "/gallery/new",
      "Should navigate to create a gallery"
    );

    await fillIn(".uk-input", "My new gallery");

    await click(".uk-button");

    assert.dom(".uk-card-title").hasText("My new gallery");
  });

  test("the user can edit a gallery", async function(assert) {
    assert.expect(1);

    defaultScenario(server);

    await authenticateSession();

    await visit("/gallery/1");

    await click(".edit-gallery");

    await fillIn(".uk-input", "Edited gallery");

    await click(".uk-button");

    assert.dom(".uk-card-title").hasText("Edited gallery");
  });

  test("the user can upload a picture to a gallery", async function(assert) {
    assert.expect(1);

    defaultScenario(server);

    await authenticateSession();

    await visit("/gallery/1");

    await click(".uk-margin-small-right");

    await fillIn(".photo-title", "Test photo");

    await fillIn(".photo-url", "example.jpg");

    await visit("/gallery/1");

    assert.equal(find("img").length, 1);
  });

  test("the user can delete a gallery", async function(assert) {
    assert.expect(2);

    defaultScenario(server);

    await authenticateSession();

    await visit("/gallery/10");

    await click(".uk-button-danger");

    assert.dom('[data-test-gallery="10"]').doesNotExist();
    assert.equal(currentURL(), "/gallery", "Should navigate to galleries");
  });
});
