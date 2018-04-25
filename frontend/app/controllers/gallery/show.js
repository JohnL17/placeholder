import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  session: service(),
  actions: {
    destroyGallery() {
      this.get("model")
        .destroyRecord()
        .then(() => {
          this.transitionToRoute("gallery.index");
        });
    }
  }
});
