import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    destroyGallery() {
      this.get('model')
        .destroyRecord()
        .then(() => {
          this.transitionToRoute('gallery.index');
        });
    },
  },
});
