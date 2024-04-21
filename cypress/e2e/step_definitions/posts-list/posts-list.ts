import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('I am on the posts list page', () => {
  cy.visit('http://127.0.0.1:3000')
})

When('The page finishes loading', () => {
  cy.get('.post-card-item').should('be.visible')
})

Then('I should see the posts list', () => {
  cy.get('.post-card-item').should('be.visible')
})

When('I click on the order by menu', () => {
  cy.get('.order-by-menu').click()
})

When('I select {string}', (option: string) => {
  cy.contains(option).click()
})

Then('The posts should be ordered by popularity', () => {
  const posts: number[] = []
  cy.get('.post-card-item')
    .should('be.visible')
    .each((element) => {
      const likes = Number(element.find('button').eq(1).text())
      posts.push(likes)
    })
    .then(() => {
      // TODO: Adjust the check for all filter types
      // DOC: Check if the posts are sorted by popularity
      const sorted = [...posts].sort((postA, postB) => postB - postA)
      expect(posts).to.deep.equal(sorted)
    })
})

When('I type {string} into the filter by text field', (text: string) => {
  // DOC: Wait 1 second to the debounce finishes
  cy.get('.filter-by-text').click().type(text).wait(1000)
})

Then('The posts should be filtered by {string}', (text: string) => {
  // DOC: Check if the posts was filtered by text
  cy.get('.post-card-item')
    .should('be.visible')
    .each((element) => {
      cy.wrap(element).find('.post-card-text').should('contain.text', text)
    })
})
