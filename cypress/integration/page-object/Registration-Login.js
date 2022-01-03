const user = {
  firstName: 'FirstName' + `${Math.round(Math.random() * 10000)}`,
  lastName: 'LastName' + `${Math.round(Math.random() * 10000)}`,
  username: 'Username' + `${Math.round(Math.random() * 10000)}`,
  password: 'Qwerty123!',
  confirmPassword: 'Qwerty123!',
}

export class NewUser {
  registration() {
    cy.get('[name="firstName"]').type('{selectall}').type(user.firstName);
    cy.get('[name="lastName"]').type('{selectall}').type(user.lastName);
    cy.get('[name="username"]').type('{selectall}').type(user.username);
    cy.get('[name="password"]').type('{selectall}').type(user.password);
    cy.get('[name="confirmPassword"]').type('{selectall}').type(user.confirmPassword);
    cy.get('span.MuiButton-label').should('contain', 'Sign Up').click();
    cy.url().should('include', '/signin');   
  }

  login() {
    cy.get('[name="username"]').type('{selectall}').type(user.username);
    cy.get('[name="password"]').type('{selectall}').type(user.password);
    cy.get('[data-test="signin-submit"]').should('contain', 'Sign In').click();
    cy.contains('div.MuiDialogTitle-root', 'Get Started with Real World App').should('exist');
  }

  loginRememberMe() {
    cy.get('[name="username"]').type('{selectall}').type(user.username);
    cy.get('[name="password"]').type('{selectall}').type(user.password);
    cy.get('[name="remember"]').check().should('be.checked');
    cy.get('[data-test="signin-submit"]').should('contain', 'Sign In').click();
    cy.contains('div.MuiDialogTitle-root', 'Get Started with Real World App').should('exist');
  }  
}
