import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import ApplicationRouteMixin from "ember-simple-auth/mixins/application-route-mixin";

export default Route.extend(ApplicationRouteMixin, {
  /**
   * The session service
   *
   * @property {EmberSimpleAuth.SessionService} session
   * @public
   */
  session: service("session"),

  /**
   * The actions for the application route
   *
   * @property {Object} actions
   * @public
   */
  actions: {
    /**
     * Invalidate the session
     *
     * @method invalidateSession
     * @public
     */
    invalidateSession() {
      this.get("session").invalidate();
    }
  }
});
