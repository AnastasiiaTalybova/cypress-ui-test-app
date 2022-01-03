const field = {
  username: 'Username',
  password: 'Password',
}

const error = {
  username: 'Username is required',
  password: 'Password must contain at least 4 characters',
}

export class SignIn {
  visit() {
    cy.visit('/signin');
  }

  checkElement() {
    cy.get('[fill-rule="evenodd"]').find('path:first-child').should('be.visible');
    cy.get('[fill-rule="evenodd"]').find('path:last-child').should('be.visible');
    cy.get('h1.MuiTypography-root.MuiTypography-h5').should('contain', 'Sign in').should('be.visible');
    cy.get('span.MuiIconButton-label').should('be.visible').find('[name="remember"]').should('be.not.checked');
    cy.get('label.MuiFormControlLabel-root').should('contain', 'Remember me').should('be.visible');
    cy.get('[data-test="signin-submit"]').should('contain', 'Sign In').should('be.visible');
    cy.get('[href="/signup"]').should('contain', 'Sign Up').should('be.visible');

  }

  checkField() {
    cy.get('[for="username"]').should('contain', field.username).should('be.visible');
    cy.get('[for="password"]').should('contain', field.password).should('be.visible');
  }

  checkError() {
    cy.get('[name="username"]').click();
    cy.get('[name="password"]').type('1');
    cy.get('[fill="currentColor"]').click();
    cy.get('p#username-helper-text')
      .should('contain', error.username)
      .should('be.visible');
    cy.get('p#password-helper-text')
      .should('contain', error.password)
      .should('be.visible');
  }

  checkcolor() {
    cy.get('[fill-rule="evenodd"]')
      .find('path:first-child')
      .should('have.css', 'color', 'rgb(63, 81, 181)');;
    cy.get('[fill-rule="evenodd"]')
      .find('path:last-child')
      .should('have.css', 'color', 'rgb(63, 81, 181)');
    cy.get('h1.MuiTypography-root.MuiTypography-h5')
      .should('contain', 'Sign in')
      .should('have.css', 'color', 'rgba(0, 0, 0, 0.87)');
    cy.get('p#username-helper-text')
      .should('contain', error.username)
      .should('have.css', 'color', 'rgb(244, 67, 54)');
    cy.get('p#password-helper-text')
      .should('contain', error.password)
      .should('have.css', 'color', 'rgb(244, 67, 54)');
    cy.get('span.MuiIconButton-label')
      .should('have.css', 'color', 'rgba(0, 0, 0, 0.54)');
    cy.get('label.MuiFormControlLabel-root')
      .should('contain', 'Remember me')
      .should('have.css', 'color', 'rgba(0, 0, 0, 0.87)');
    cy.get('span.MuiIconButton-label')
      .click()
      .should('have.css', 'color', 'rgb(63, 81, 181)');
  }
}
