import { module, test } from "qunit";
import { setupTest } from "ember-qunit";
import { run } from "@ember/runloop";

module("Unit | Model | user", function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test("it exists", function(assert) {
    let store = this.owner.lookup("service:store");
    let model = run(() =>
      store.createRecord("user", {
        username: "test-user",
        email: "test-email",
        password: "test-password",
        firstName: "test-first-name",
        lastName: "test-last-name"
      })
    );
    assert.ok(model);
    assert.equal(model.get("username"), "test-user");
    assert.equal(model.get("email"), "test-email");
    assert.equal(model.get("password"), "test-password");
    assert.equal(model.get("firstName"), "test-first-name");
    assert.equal(model.get("lastName"), "test-last-name");
  });
});
