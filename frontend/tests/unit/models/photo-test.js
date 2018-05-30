import { module, test } from "qunit";
import { setupTest } from "ember-qunit";
import { run } from "@ember/runloop";

module("Unit | Model | photo", function(hooks) {
  setupTest(hooks);

  test("it exists", function(assert) {
    let store = this.owner.lookup("service:store");
    let model = run(() =>
      store.createRecord("photo", {
        title: "test-photo",
        url: "test-url"
      })
    );
    assert.ok(model);
    assert.equal(model.get("title"), "test-photo");
    assert.equal(model.get("url"), "test-url");
  });
});
