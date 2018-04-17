import Controller from "@ember/controller"

export default Controller.extend({
  actions: {
    editGallery() {
      let editedTitle = this.get("model.title")
      let gallery = this.get("model")
      gallery.set("title", editedTitle)
      gallery.save().then(() => {
        this.transitionToRoute("gallery.index")
      })
    }
  }
})
