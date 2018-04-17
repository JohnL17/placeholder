import Controller from "@ember/controller"

export default Controller.extend({
  actions: {
    deletePost() {
      let postId = this.get("postId")
      let post = this.get("model").find
    }
  }
})
