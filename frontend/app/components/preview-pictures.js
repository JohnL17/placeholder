import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  preview: computed("album", function() {
    return this.get("album.photos").slice(0, 4);
  })
});
