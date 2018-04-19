import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    uploadPicture() {
      let newRecord = this.store.createRecord("photo", {
        title: this.get("newTitle"),
        url: this.get("newUrl"),
        album: this.get("model")
      });
      newRecord.save().then(() => {
        this.transitionToRoute("gallery.index");
      });
    }
  }
});
