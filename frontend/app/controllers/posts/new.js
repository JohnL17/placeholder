import Controller from "@ember/controller"

export default Controller.extend({
  actions: {
    createPost() {
      let newTitle = this.get("newTitle")
      let newBody = this.get("newBody")
      let newRecord = this.store.createRecord("post", {
        title: newTitle,
        body: newBody
      })
      newRecord.save().then(() => {
        this.transitionToRoute("posts.index")
      })
      this.set("newTitle", "")
      this.set("newBody", "")
    }
  }
})
