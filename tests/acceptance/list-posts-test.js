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

  test('should show details for a selected post.', async function(assert) {
    await visit('/posts/1')
    assert.equal(currentURL(), '/posts/1', 'should navigate to show route')
    assert.ok(
      this.element
        .querySelector('.uk-card-title')
        .textContent.includes(
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
        ),
      'should list post title'
    )
    assert.equal(
      this.element.querySelector('p').innerHTML,
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      'should list post body'
    )
  })

  test('should list all albums.', async function(assert) {
    await visit('/gallery')
    assert.equal(
      this.element.querySelectorAll('.uk-card').length,
      100,
      'should display 100 listings'
    )
  })

  test('should list all photos for selected album.', async function(assert) {
    await visit('/gallery/1')
    assert.equal(currentURL(), '/gallery/1', 'should navigate to show route')
    assert.equal(
      this.element.querySelectorAll('img').length,
      50,
      'should display 50 photos'
    )
  })
})
