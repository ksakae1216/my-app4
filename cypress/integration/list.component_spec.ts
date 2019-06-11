describe('ListComponent', () => {

  it('list page open', function() {
    cy.visit('http://localhost:4200/list');
  })

  it('list data check', function(){
    cy.get('tbody > :nth-child(1) > .cdk-column-id').should('have.text', ' 1 ')
    cy.get('tbody > :nth-child(1) > .cdk-column-name').should('have.text', ' 山田　太郎 ')
    cy.get('tbody > :nth-child(1) > .cdk-column-tel').should('have.text', ' 03-1111-1111 ')
    cy.get('tbody > :nth-child(1) > .cdk-column-address').should('have.text', ' 東京都青ケ島村1-1-1 ')
  })

});