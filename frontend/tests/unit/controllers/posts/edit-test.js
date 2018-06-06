import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Controller | posts/edit", async function(hooks) {
  setupTest(hooks);

  test("The user can edit a post", function(assert) {
    assert.expect(2);

    const controller = this.owner.lookup("controller:posts/edit");

    controller.set("model", {
      save: () => {
        assert.ok(true);
        return new Promise(res => res());
      }
    });
    controller.set("transitionToRoute", path => {
      assert.equal("posts.index", path);
    });

    controller.send("editPost");
  });
});
