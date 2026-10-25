describe('KEPYCH ECO ZRUB E2E Pricing Quiz & Authentication Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('completes multi-step quiz calculation and verifies discount banner', () => {
    cy.get('#quiz').scrollIntoView();
    cy.contains('Альтанку / Бесідку').click();
    cy.contains('Далі').click();
    cy.contains('Крок 2 з 3').should('be.visible');
    cy.contains('Далі').click();
    cy.contains('Крок 3 з 3').should('be.visible');
    cy.contains('Отримати детальний кошторис').should('be.visible');
    cy.contains('-5% на монтаж').should('be.visible');
  });

  it('opens authorization modal and performs client sign-in', () => {
    cy.contains('Увійти в кабінет').click();
    cy.contains('Авторизація').should('be.visible');
    cy.contains('Увійти в кабінет замовника').click();
    cy.contains('Замовлення #ZR-8842').should('be.visible');
  });
});
