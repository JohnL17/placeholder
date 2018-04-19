import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    editGallery() {
      this.get("model")
        .save()
        .then(() => {
          this.transitionToRoute("gallery.index");
        });
    }
  }
});
