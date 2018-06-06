import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Controller | application", function(hooks) {
  setupTest(hooks);

  test("The user can logout", function(assert) {
    assert.expect(1);
    const controller = this.owner.lookup("controller:application");
    const session = this.owner.lookup("service:session");

    controller.set("session", session);
    controller.send("logout");
    assert.ok(session);
  });
});
