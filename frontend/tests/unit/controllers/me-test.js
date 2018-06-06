import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Controller | me", function(hooks) {
  setupTest(hooks);

  test("The user can edit his profile", function(assert) {
    assert.expect(2);
    const controller = this.owner.lookup("controller:me");

    controller.set("model", {
      save: () => {
        assert.ok(true);
        return new Promise(res => res());
      }
    });
    controller.set("transitionToRoute", path => {
      assert.equal("index", path);
    });

    controller.send("editProfile");
  });
});
