import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createPost() {
      this.store
        .createRecord('post', {
          title: this.get('newTitle'),
          body: this.get('newBody'),
        })
        .save()
        .then(() => {
          this.transitionToRoute('posts.index');
        });
    },
  },
});
