import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Route | gallery/new", function(hooks) {
  setupTest(hooks);

  test("it exists", function(assert) {
    assert.expect(1);

    const route = this.owner.lookup("route:gallery/new");

    assert.ok(route);
  });
});
