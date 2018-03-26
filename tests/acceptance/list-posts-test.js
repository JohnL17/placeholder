import { module, test } from 'qunit'
import { visit, currentURL, click } from '@ember/test-helpers'
import { setupApplicationTest } from 'ember-qunit'

module('Acceptance | list posts', function(hooks) {
  setupApplicationTest(hooks)

  test('should show about as the home page', async function(assert) {
    await visit('/')
    assert.equal(currentURL(), '/about', 'should redirect automatically')
  })

  test('should link to posts page', async function(assert) {
    await visit('/')
    await click('.menu-posts')
    assert.equal(currentURL(), '/posts', 'should navigate to posts')
  })

  test('should list all posts.', async function(assert) {
    await visit('/posts')
    assert.equal(
      this.element.querySelectorAll('.uk-card').length,
      100,
      'should display 100 listings'
    )
  })

  test('should show details for a selected post.', async function(assert) {})
})
