import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Controller | gallery/show", function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test("it exists", function(assert) {
    let controller = this.owner.lookup("controller:gallery/show");
    assert.ok(controller);
  });
});
