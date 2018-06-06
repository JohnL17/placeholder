import { module, test } from "qunit";
import { setupTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";
import { run } from "@ember/runloop";

module("Unit | Controller | gallery/new", function(hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test("The user can create new galleries", async function(assert) {
    assert.expect(2);

    const controller = this.owner.lookup("controller:gallery/new");
    const store = this.owner.lookup("service:store");

    controller.set("store", store);
    controller.set("newTitle", "Test");
    controller.set("transitionToRoute", async path => {
      assert.equal("gallery.index", path);
      const album = await store.query("album", { title: "Test" });
      assert.ok(album);
    });

    run(() => controller.send("createGallery"));
  });
});
