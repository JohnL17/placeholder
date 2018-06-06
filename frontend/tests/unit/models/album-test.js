import { module, test } from "qunit";
import { setupTest } from "ember-qunit";
import { run } from "@ember/runloop";

module("Unit | Model | album", function(hooks) {
  setupTest(hooks);

  test("it exists", function(assert) {
    let store = this.owner.lookup("service:store");
    let model = run(() => store.createRecord("album", { title: "test" }));
    assert.ok(model);
    assert.equal(model.get("title"), "test");
  });
});
