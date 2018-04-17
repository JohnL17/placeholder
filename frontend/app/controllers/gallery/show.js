import Controller from "@ember/controller"

export default Controller.extend({
  actions: {
    destroyGallery() {
      let gallery = this.get("model")
      gallery.destroyRecord().then(() => {
        this.transitionToRoute("gallery.index")
      })
    }
  }
})
