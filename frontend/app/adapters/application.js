import JSONAPIAdapter from "ember-data/adapters/json-api";
import DataAdapterMixin from "ember-simple-auth/mixins/data-adapter-mixin";
import { inject as service } from "@ember/service";

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  namespace: "/api/v1",
  session: service("session"),
  authorize(xhr) {
    let { token } = this.get("session.data.authenticated");
    xhr.setRequestHeader("Authorization", `Bearer ${token}`);
  }
});
