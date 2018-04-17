import Controller from "@ember/controller"

export default Controller.extend({
  actions: {
    uploadPicture() {
      let newTitle = this.get("newTitle")
      let newUrl = this.get("newUrl")
      let albumId = this.get("model")
      let newRecord = this.store.createRecord("photo", {
        title: newTitle,
        url: newUrl,
        album: albumId
      })
      newRecord.save().then(() => {
        this.transitionToRoute("gallery.index")
      })
      this.set("newTitle", "")
    }
  }
})
