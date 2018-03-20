import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr('string'),
  username: DS.attr('string'),
  email: DS.attr('string'),
  street: DS.attr('string'),
  suite: DS.attr('string'),
  city: DS.attr('string'),
  zipcode: DS.attr('string'),
  lat: DS.attr('string'),
  lng: DS.attr('string'),
  phone: DS.attr('string'),
  website: DS.attr('string'),
  companyName: DS.attr('string'),
  catchPhrase: DS.attr('string'),
  bs: DS.attr('string')
})
