import ApplicationAdapter from "./application";
import { inject as service } from "@ember/service";

export default ApplicationAdapter.extend({
  session: service(),
  pathForType() {
    return this.get("session.isAuthenticated")
      ? "auth/me"
      : "auth/registration";
  }
});
