import Controller from "@ember/controller"

export default Controller.extend({
  init() {
    this._super(...arguments)
  },
  actions: {
    editPost() {
      let editedTitle = this.get("model.title")
      let editedBody = this.get("model.body")
      let post = this.get("model")
      post.set("title", editedTitle)
      post.set("body", editedBody)
      post.save().then(() => {
        this.transitionToRoute("posts.index")
      })
    }
  }
})
