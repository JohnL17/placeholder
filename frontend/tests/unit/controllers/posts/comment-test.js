import { module, test } from "qunit";
import { setupTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";
import { run } from "@ember/runloop";

module("Unit | Controller | posts/comment", function(hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test("The user can write a comment to a post", async function(assert) {
    assert.expect(2);

    const controller = this.owner.lookup("controller:posts/comment");
    const store = this.owner.lookup("service:store");

    controller.set("store", store);
    controller.set("newTitle", "Testcomment");
    controller.set("newEmail", "Email");
    controller.set("newBody", "Body");
    controller.set("model", 1);
    controller.set("transitionToRoute", async path => {
      assert.equal("posts.index", path);
      const comment = await store.query("comment", { title: "Testcomment" });
      assert.ok(comment);
    });

    run(() => controller.send("postComment"));
  });
});
