import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Adapter | user", function(hooks) {
  setupTest(hooks);

  test("it exists", function(assert) {
    const adapter = this.owner.lookup("adapter:user");
    assert.ok(adapter);
  });
});
