describe('KEPYCH ECO ZRUB E2E Navigation & Core Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads homepage and displays brand headline', () => {
    cy.contains('KEPYCH ECO ZRUB').should('be.visible');
    cy.contains('Ексклюзивні зруби, альтанки та будинки').should('be.visible');
  });

  it('smoothly scrolls to sections on anchor click', () => {
    cy.get('a[href="#catalog"]').first().click();
    cy.get('#catalog').should('be.visible');
    cy.get('a[href="#quiz"]').first().click();
    cy.get('#quiz').should('be.visible');
  });

  it('opens and closes client portal modal window', () => {
    cy.contains('Кабінет замовника (LIVE)').click();
    cy.contains('Замовлення #ZR-8842').should('be.visible');
    cy.contains('Live Cam #02 (1080p)').should('be.visible');
    cy.contains('Закрити панель').click();
    cy.contains('Замовлення #ZR-8842').should('not.exist');
  });
});
