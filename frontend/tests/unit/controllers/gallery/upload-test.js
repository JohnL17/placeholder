import { module, test } from "qunit";
import { setupTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";
import { run } from "@ember/runloop";

module("Unit | Controller | gallery/upload", function(hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test("The user can upload pictures to galleries", async function(assert) {
    assert.expect(2);

    const controller = this.owner.lookup("controller:gallery/upload");
    const store = this.owner.lookup("service:store");

    controller.set("store", store);
    controller.set("newTitle", "Testphoto");
    controller.set("newUrl", "picture.url");
    controller.set("model", 1);
    controller.set("transitionToRoute", async path => {
      assert.equal("gallery.index", path);
      const photo = await store.query("photo", { title: "Testphoto" });
      assert.ok(photo);
    });

    run(() => controller.send("uploadPicture"));
  });
});
