import Route from '@ember/routing/route'

export default Route.extend({
  model(params) {
    return this.store.findRecord('album', params.id)
  },

  afterModel(model) {
    return this.store.query('photo', { albumId: model.id })
  }
})
