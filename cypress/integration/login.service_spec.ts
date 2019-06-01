describe('LoginService', () => {

  beforeEach(function() {
    // open login page
    cy.visit('http://localhost:4200');
  })

  it('do login', function() {
    cy.get('input').eq(0).click().type('test1')
    cy.get('input').eq(1).click().type('password1')
    cy.get('.loginBtn').click()
    cy.url().should('include', '/list')
  })

});