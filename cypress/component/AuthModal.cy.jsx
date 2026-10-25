import React from 'react';
import AuthModal from '../../src/components/AuthModal';

describe('AuthModal Component Tests (Unit)', () => {
  it('renders inputs and submit button when open', () => {
    const handleClose = cy.stub().as('closeHandler');
    const handleSuccess = cy.stub().as('successHandler');

    cy.mount(<AuthModal isOpen={true} onClose={handleClose} onSuccess={handleSuccess} />);
    cy.contains('Авторизація').should('be.visible');
    cy.get('input[type="text"]').should('be.visible');
    cy.contains('Увійти через Дія.Підпис / Google ID').should('be.visible');
  });

  it('triggers onSuccess when form is submitted', () => {
    const handleSuccess = cy.stub().as('successHandler');
    cy.mount(<AuthModal isOpen={true} onClose={() => {}} onSuccess={handleSuccess} />);
    cy.get('button[type="submit"]').click();
    cy.get('@successHandler').should('have.been.calledOnce');
  });
});
