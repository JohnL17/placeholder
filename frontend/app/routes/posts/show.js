import Route from '@ember/routing/route'
import RSVP from 'rsvp'

export default Route.extend({
  model({id}) {
    return RSVP.hash({
        post: this.store.findRecord('post', id),
        comments: this.store.query('comment', { postId: id })
    })
  }
})
