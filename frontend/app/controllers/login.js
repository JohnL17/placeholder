import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  session: service("session"),
  notify: service("notify"),

  actions: {
    async authenticate() {
      try {
        await this.get("session").authenticate(
          "authenticator:jwt",
          this.getProperties("identification", "password")
        );
      } catch (e) {
        this.get("notify").error("Wrong username or password");
      }
    }
  }
});
