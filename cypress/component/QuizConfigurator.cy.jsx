import React from 'react';
import QuizConfigurator from '../../src/components/QuizConfigurator';

describe('QuizConfigurator Component Tests (Unit)', () => {
  it('renders correctly and shows Step 1 options', () => {
    cy.mount(<QuizConfigurator />);
    cy.contains('Швидкий розрахунок вартості зрубу').should('be.visible');
    cy.contains('Крок 1 з 3').should('be.visible');
    cy.contains('Альтанку / Бесідку').should('be.visible');
  });

  it('allows selecting option and moving to Step 2', () => {
    cy.mount(<QuizConfigurator />);
    cy.contains('Будинок / Лазню зі зрубу').click();
    cy.contains('Далі').click();
    cy.contains('Крок 2 з 3').should('be.visible');
    cy.contains('від 145 000 грн').should('be.visible');
  });
});
