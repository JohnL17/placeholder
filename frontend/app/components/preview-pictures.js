import Component from "@ember/component"
import { computed } from "@ember/object"
import { inject as service } from "@ember/service"

export default Component.extend({
  preview: computed("album", function() {
    return this.get("album.photos").slice(0, 4)
  })
})
