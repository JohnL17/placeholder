import { module, test } from "qunit";
import { visit, currentURL, click } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | list posts", function(hooks) {
  setupApplicationTest(hooks);

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

  test("should list all posts.", async function(assert) {
    assert.expect(1);

    await visit("/posts");

    assert.dom(".uk-card").exists({ count: 100 });
  });

  test("should show details for a selected post.", async function(assert) {
    assert.expect(3);

    await visit("/posts/1");

    assert.equal(currentURL(), "/posts/1", "should navigate to show route");

    assert
      .dom(".uk-card-title")
      .hasText(
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      );

    assert
      .dom("p")
      .hasText(
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      );
  });

  test("should list all albums.", async function(assert) {
    assert.expect(1);

    await visit("/gallery");

    assert.dom(".uk-card").exists({ count: 100 });
  });

  test("should list all photos for selected album.", async function(assert) {
    assert.expect(2);

    await visit("/gallery/1");

    assert.equal(currentURL(), "/gallery/1", "should navigate to show route");

    assert.dom("img").exists({ count: 50 });
  });
});
