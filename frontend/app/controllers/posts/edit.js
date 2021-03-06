import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    editPost() {
      this.get("model")
        .save()
        .then(() => {
          this.transitionToRoute("posts.index");
        });
    }
  }
});
