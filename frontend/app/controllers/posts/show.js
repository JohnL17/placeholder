import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  session: service(),
  actions: {
    destroyPost() {
      this.get("model.post")
        .destroyRecord()
        .then(() => {
          this.transitionToRoute("posts.index");
        });
    }
  }
});
