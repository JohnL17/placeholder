import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  notify: service(),

  actions: {
    createUser() {
      if (this.get("model.password") === this.get("confirmPassword")) {
        this.get("model")
          .save()
          .then(() => {
            this.transitionToRoute("login");
          });
      } else {
        this.get("notify").error("Passwords do not match");
      }
    }
  }
});
