import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  notify: service(),

  actions: {
    createUser() {
      if (this.get("newPassword") === this.get("confirmPassword")) {
        let newRecord = this.store.createRecord("user", {
          username: this.get("newUsername"),
          first_name: this.get("newFirstName"),
          last_name: this.get("newLastName"),
          email: this.get("newEmail"),
          password: this.get("newPassword")
        });
        console.log(newRecord);
        newRecord.save().then(() => {
          this.transitionToRoute("login");
        });
      } else {
        this.get("notify").error("Passwords are not equal");
      }
    }
  }
});
