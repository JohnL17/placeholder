import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Controller | gallery/edit", function(hooks) {
  setupTest(hooks);

  test("The galleries are editable", function(assert) {
    assert.expect(2);

    const controller = this.owner.lookup("controller:gallery/edit");

    controller.set("model", {
      save: () => {
        assert.ok(true);
        return new Promise(res => res());
      }
    });
    controller.set("transitionToRoute", path => {
      assert.equal("gallery.index", path);
    });

    controller.send("editGallery");
  });
});
