import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  session: service("session"),

  actions: {
    authenticate() {
      this.get("session")
        .authenticate(
          "authenticator:jwt",
          this.getProperties("identification", "password")
        )
        .then(() => {
          console.log("logged in");
        })
        .catch(err => {
          console.log("error", err);
        });
    }
  }
});
