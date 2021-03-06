import { JSONAPISerializer } from "ember-cli-mirage";
import Ember from "ember";

const { dasherize } = Ember.String;

export default JSONAPISerializer.extend({
  keyForAttribute(key) {
    return dasherize(key);
  }
});
