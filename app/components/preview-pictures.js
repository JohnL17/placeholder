import Component from '@ember/component'
import { computed } from '@ember/object'
import { inject as service } from '@ember/service'

export default Component.extend({
  store: service(),
  allPhotos: computed('album.id', function() {
    return this.get('store').query('photo', {
      albumId: this.get('album.id')
    })
  }),
  preview: computed.filter('allPhotos', function(photo, index) {
    return index < 4
  })
})
