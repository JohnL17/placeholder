import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    postComment() {
      let newRecord = this.store.createRecord("comment", {
        title: this.get("newTitle"),
        email: this.get("newEmail"),
        body: this.get("newBody"),
        post: this.get("model")
      });
      newRecord.save().then(() => {
        this.transitionToRoute("posts.index");
      });
    }
  }
});
