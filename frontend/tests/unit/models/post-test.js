import { module, test } from "qunit";
import { setupTest } from "ember-qunit";
import { run } from "@ember/runloop";

module("Unit | Model | post", function(hooks) {
  setupTest(hooks);

  test("it exists", function(assert) {
    let store = this.owner.lookup("service:store");
    let model = run(() =>
      store.createRecord("post", { title: "test-post", body: "test-body" })
    );
    assert.ok(model);
    assert.equal(model.get("title"), "test-post");
    assert.equal(model.get("body"), "test-body");
  });
});
