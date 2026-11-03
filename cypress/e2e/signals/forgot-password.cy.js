
describe('Signals - Forgot Password', () => {
  beforeEach(() => {
    cy.visit('https://termii-v4-dashboard.vercel.app/auth/signin');
    cy.contains('Forgot password?').click();
  });

  it('FP-001 - should display password reset confirmation after submitting an email', () => {
    cy.get('input[type="email"]')
      .should('be.visible')
      .type('qa.test@example.com');

    cy.contains('button', 'Continue')
      .should('be.enabled')
      .click();

    cy.contains('Check your inbox', { timeout: 15000 })
      .should('be.visible');

    cy.contains('qa.test@example.com').should('be.visible');
  });

  it('FP-002 - should retain password reset confirmation after page refresh', () => {
    cy.get('input[type="email"]')
      .should('be.visible')
      .type('qa.test@example.com');

    cy.contains('button', 'Continue')
      .should('be.enabled')
      .click();

    cy.contains('Check your inbox', { timeout: 15000 })
      .should('be.visible');

    cy.reload();

    cy.contains('Check your inbox', { timeout: 15000 })
      .should('be.visible');

    cy.contains('qa.test@example.com').should('be.visible');
  });
});
