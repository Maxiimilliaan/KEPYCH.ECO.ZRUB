Cypress.Commands.add('openAuthModal', () => {
  cy.contains('Увійти в кабінет').click();
  cy.contains('Кабінет замовника KEPYCH').should('be.visible');
});

Cypress.Commands.add('openClientPortal', () => {
  cy.contains('Кабінет замовника (LIVE)').click();
  cy.contains('Замовлення #ZR-8842').should('be.visible');
});
