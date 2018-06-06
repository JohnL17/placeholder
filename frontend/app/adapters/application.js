import JSONAPIAdapter from "ember-data/adapters/json-api";
import DataAdapterMixin from "ember-simple-auth/mixins/data-adapter-mixin";

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  namespace: "/api/v1",
  authorize(xhr) {
    let { token } = this.get("session.data.authenticated");
    if (token) {
      /* istanbul ignore next */
      xhr.setRequestHeader("Authorization", `JWT ${token}`);
    }
  }
});
