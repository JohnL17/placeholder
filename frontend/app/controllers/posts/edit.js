import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
  },
  actions: {
    editPost() {
      let post = this.get('model');
      post.set(
        'title',
        this.get('model.title'),
        'body',
        this.get('model.body'),
      );
      post.save().then(() => {
        this.transitionToRoute('posts.index');
      });
    },
  },
});
