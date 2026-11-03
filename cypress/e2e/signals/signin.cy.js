describe('Signals - Sign In', () => {

  it('SI-001 - should open the sign-in page', () => {

    cy.visit('https://termii-v4-dashboard.vercel.app/auth/signin');

    cy.location('pathname')
      .should('eq', '/auth/signin');

  });

});
