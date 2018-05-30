import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Controller | gallery/show", function(hooks) {
  setupTest(hooks);

  test("The user can delete galleries", function(assert) {
    assert.expect(2);

    const controller = this.owner.lookup("controller:gallery/show");

    controller.set("model", {
      destroyRecord: () => {
        assert.ok(true);
        return new Promise(res => res());
      }
    });
    controller.set("transitionToRoute", path => {
      assert.equal("gallery.index", path);
    });

    controller.send("destroyGallery");
  });
});
