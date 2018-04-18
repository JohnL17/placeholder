import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  email: DS.attr('string'),
  body: DS.attr('string'),
  post: DS.belongsTo('post'),
});
