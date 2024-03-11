describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/');
    cy.get('#collapseTwo > .accordion-body > :nth-child(1) > .btn').click();
    // cy.get('#collapseTwo > .accordion-body > :nth-child(11) > .btn').click();
    cy.get('.card-title').contains('Rick Sanchez').click();
  });
});
