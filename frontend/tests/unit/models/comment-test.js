import { module, test } from "qunit";
import { setupTest } from "ember-qunit";
import { run } from "@ember/runloop";

module("Unit | Model | comment", function(hooks) {
  setupTest(hooks);

  test("it exists", function(assert) {
    let store = this.owner.lookup("service:store");
    let model = run(() =>
      store.createRecord("comment", {
        title: "test-comment",
        email: "test-email",
        body: "test-body"
      })
    );
    assert.ok(model);
    assert.equal(model.get("title"), "test-comment");
    assert.equal(model.get("email"), "test-email");
    assert.equal(model.get("body"), "test-body");
  });
});
