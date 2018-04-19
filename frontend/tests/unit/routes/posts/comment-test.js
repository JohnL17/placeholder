import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Route | posts/comment", function(hooks) {
  setupTest(hooks);

  test("it exists", function(assert) {
    let route = this.owner.lookup("route:posts/comment");
    assert.ok(route);
  });
});
