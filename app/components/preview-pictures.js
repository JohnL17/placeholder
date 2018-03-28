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
  preview: computed('allPhotos.[]', function() {
    return this.get('allPhotos').slice(0, 4)
  })
})
