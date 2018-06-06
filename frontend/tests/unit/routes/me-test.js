import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Route | me", function(hooks) {
  setupTest(hooks);

  test("it exists", function(assert) {
    const route = this.owner.lookup("route:me");
    assert.ok(route);
  });
});
