import Route from '@ember/routing/route';
import {hash} from 'rsvp';

export default Route.extend({
  model({id}) {
    return hash({
      post: this.store.findRecord('post', id),
      comments: this.store.query('comment', {postId: id}),
    });
  },
});
