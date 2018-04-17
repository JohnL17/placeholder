import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | gallery/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:gallery/edit');
    assert.ok(route);
  });
});
