import Route from "@ember/routing/route";
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    /*
     * the auth/me endpoint returns always the user who is logged in
     * regardless if a id is passed or not
     */
    return this.get("store").queryRecord("user", {});
  }
});
