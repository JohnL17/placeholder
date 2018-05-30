import { module, test } from "qunit";
import { setupTest } from "ember-qunit";
import { run } from "@ember/runloop";

module("Unit | Model | todo", function(hooks) {
  setupTest(hooks);

  test("it exists", function(assert) {
    let store = this.owner.lookup("service:store");
    let model = run(() =>
      store.createRecord("todo", { title: "test-todo", completed: true })
    );
    assert.ok(model);
    assert.equal(model.get("title"), "test-todo");
    assert.equal(model.get("completed"), true);
  });
});
