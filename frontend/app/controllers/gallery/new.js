import Controller from "@ember/controller"

export default Controller.extend({
  actions: {
    createGallery() {
      let newTitle = this.get("newTitle")
      let newPhoto = this.get("newPhoto")
      let newRecord = this.store.createRecord("album", {
        title: newTitle,
        photo: newPhoto
      })
      newRecord.save().then(() => {
        this.transitionToRoute("gallery.index")
      })
      this.set("newTitle", "")
    }
  }
})
