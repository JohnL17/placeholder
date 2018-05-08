import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    editProfile() {
      this.get("model")
        .save()
        .then(() => {
          this.transitionToRoute("index");
        });
    }
  }
});
