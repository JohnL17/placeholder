import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    createGallery() {
      this.store
        .createRecord("album", {
          title: this.get("newTitle")
        })
        .save()
        .then(() => {
          this.transitionToRoute("gallery.index");
        });
    }
  }
});
