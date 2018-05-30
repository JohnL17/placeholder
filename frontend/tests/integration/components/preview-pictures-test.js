import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import EmberObject from "@ember/object";

module("Integration | Component | preview-pictures", function(hooks) {
  setupRenderingTest(hooks);

  test("Four preview pictures are shown in the gallery index", async function(assert) {
    assert.expect(5);

    this.set(
      "album",
      EmberObject.create({
        title: "test",
        photos: [
          EmberObject.create({
            title: "testphoto",
            url: "test.ch",
            album: 1
          }),
          EmberObject.create({
            title: "testphoto2",
            url: "test2.ch",
            album: 1
          }),
          EmberObject.create({
            title: "testphoto3",
            url: "test3.ch",
            album: 1
          }),
          EmberObject.create({
            title: "testphoto4",
            url: "test4.ch",
            album: 1
          }),
          EmberObject.create({
            title: "testphoto5",
            url: "test5.ch",
            album: 1
          })
        ],
        album: 1
      })
    );

    await render(hbs`{{preview-pictures album=album}}`);

    assert.equal(
      this.element
        .querySelector("[data-test-photo=testphoto]")
        .getAttribute("alt"),
      "testphoto",
      "get the title of the first photo"
    );
    assert.equal(
      this.element
        .querySelector("[data-test-photo=testphoto2]")
        .getAttribute("alt"),
      "testphoto2",
      "get the title of the second photo"
    );
    assert.equal(
      this.element
        .querySelector("[data-test-photo=testphoto3]")
        .getAttribute("alt"),
      "testphoto3",
      "get the title of the third photo"
    );
    assert.equal(
      this.element
        .querySelector("[data-test-photo=testphoto4]")
        .getAttribute("alt"),
      "testphoto4",
      "get the title of the fourth photo"
    );
    assert.dom("[data-test-photo=testphoto5]").doesNotExist();
  });
});
