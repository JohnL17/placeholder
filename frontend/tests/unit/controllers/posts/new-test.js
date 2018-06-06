import { module, test } from "qunit";
import { setupTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";
import { run } from "@ember/runloop";

module("Unit | Controller | posts/new", function(hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test("The user can create a post", async function(assert) {
    assert.expect(2);

    const controller = this.owner.lookup("controller:posts/new");
    const store = this.owner.lookup("service:store");

    controller.set("store", store);
    controller.set("newTitle", "New Post");
    controller.set("newBody", "Body");
    controller.set("transitionToRoute", async path => {
      assert.equal("posts.index", path);
      const post = await store.query("post", { title: "New Post" });
      assert.ok(post);
    });

    run(() => controller.send("createPost"));
  });
});
