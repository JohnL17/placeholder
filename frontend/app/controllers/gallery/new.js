import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createGallery() {
      let newRecord = this.store.createRecord('album', {
        title: this.get('newTitle'),
      });
      newRecord.save().then(() => {
        this.transitionToRoute('gallery.index');
      });
    },
  },
});
