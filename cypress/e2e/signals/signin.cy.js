describe('Signals - Sign In', () => {

  it('SI-001 - should open the sign-in page', () => {

    cy.visit('https://termii-v4-dashboard.vercel.app/auth/signin');

    cy.location('pathname')
      .should('eq', '/auth/signin');

  }); 


it('SI-002 - should show required email validation when email is cleared', () => {
  cy.visit('https://termii-v4-dashboard.vercel.app/auth/signin');

  cy.get('input[type="password"]').type('TestPassword123');

 cy.get('input[type="email"]')
  .type('test@example.com')
  .clear()
  .blur();

  cy.get('input[type="email"]').should('have.value', '');

cy.get('#auth-email .field-error')
  .should('be.visible')
  .and('have.text', 'Email is required');
});

it('SI-003 - should show invalid credentials message for incorrect login details', () => {
  cy.visit('https://termii-v4-dashboard.vercel.app/auth/signin');

  cy.get('input[type="email"]').type('test@gmail.com');
  cy.get('input[type="password"]').type('TestPassword123');

  cy.contains('button', 'Log in').click();

  cy.contains('Invalid credentials').should('be.visible');
});

it('SI-004 - should disable login when password is empty', () => {
  cy.visit('https://termii-v4-dashboard.vercel.app/auth/signin');

  cy.get('input[type="email"]').type('test@gmail.com');

  cy.get('input[type="password"]').clear();

  cy.contains('button', 'Log in').should('be.disabled');
});
});
