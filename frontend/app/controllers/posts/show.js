import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    destroyPost() {
      this.get("model.post")
        .destroyRecord()
        .then(() => {
          this.transitionToRoute("posts.index");
        });
    }
  }
});
