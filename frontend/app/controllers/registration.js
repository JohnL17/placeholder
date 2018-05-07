import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  notify: service(),

  actions: {
    createUser() {
      if (this.get("newPassword") === this.get("confirmPassword")) {
        let newRecord = this.store.createRecord("user", {
          username: this.get("newUsername"),
          firstName: this.get("newFirstName"),
          lastName: this.get("newLastName"),
          email: this.get("newEmail"),
          password: this.get("newPassword")
        });
        newRecord.save().then(() => {
          this.transitionToRoute("login");
        });
      } else {
        this.get("notify").error("Passwords are not equal");
      }
    }
  }
});
