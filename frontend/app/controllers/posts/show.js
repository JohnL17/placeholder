import Controller from "@ember/controller"

export default Controller.extend({
  actions: {
    destroyPost() {
      let post = this.get("model.post")
      post.destroyRecord().then(() => {
        this.transitionToRoute("posts.index")
      })
    }
  }
})
