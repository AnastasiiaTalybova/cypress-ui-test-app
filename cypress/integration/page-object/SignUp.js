const field = {
  firstName: 'First Name',
  lastName: 'Last Name',
  username: 'Username',
  password: 'Password',
  confirmPassword: 'Confirm Password',
}

const error = {
  firstName: 'First Name is required',
  lastName: 'Last Name is required',
  username: 'Username is required',
  password: 'Enter your password',
  confirmPassword: 'Confirm your password',
}

const user = {
  firstName: 'FirstName' + `${Math.round(Math.random() * 10000)}`,
  lastName: 'LastName' + `${Math.round(Math.random() * 10000)}`,
  username: 'Username' + `${Math.round(Math.random() * 10000)}`,
  password: 'Qwerty123!',
  confirmPassword: 'Qwerty123!',
}

export class SignUp {
  visit() {
    cy.visit('/signup');
  }

  checkElement() {
    cy.get('[fill-rule="evenodd"]').find('path:first-child').should('be.visible');
    cy.get('[fill-rule="evenodd"]').find('path:last-child').should('be.visible');
    cy.get('h1.MuiTypography-root.MuiTypography-h5').should('contain', 'Sign Up').should('be.visible');
    cy.get('span.MuiButton-label').should('contain', 'Sign Up').should('be.visible');
    cy.get('[href="/signin"]').should('contain', 'Sign In').should('be.visible');
  }

  checkField() {
    cy.get('[for="firstName"]').should('contain', field.firstName).should('be.visible');
    cy.get('[for="lastName"]').should('contain', field.lastName).should('be.visible');
    cy.get('[for="username"]').should('contain', field.username).should('be.visible');
    cy.get('[for="password"]').should('contain', field.password).should('be.visible');
    cy.get('[for="confirmPassword"]').should('contain', field.confirmPassword).should('be.visible');
  }

  checkError() {
    cy.get('[name="firstName"]').click();
    cy.get('[name="lastName"]').click();
    cy.get('[name="username"]').click();
    cy.get('[name="password"]').click();
    cy.get('[name="confirmPassword"]').click();
    cy.get('[fill="currentColor"]').click();
    cy.get('p.MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error.Mui-required')
      .should('contain', error.firstName)
      .should('be.visible');
    cy.get('p.MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error.Mui-required')
      .should('contain', error.lastName)
      .should('be.visible');
    cy.get('p.MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error.Mui-required')
      .should('contain', error.username)
      .should('be.visible');
    cy.get('p.MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error.Mui-required')
      .should('contain', error.password)
      .should('be.visible');
    cy.get('p.MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error.Mui-required')
      .should('contain', error.confirmPassword)
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
      .should('contain', 'Sign Up')
      .should('have.css', 'color', 'rgba(0, 0, 0, 0.87)');
    cy.get('p.MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error.Mui-required')
      .should('contain', error.firstName)
      .should('have.css', 'color', 'rgb(244, 67, 54)');
    cy.get('p.MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error.Mui-required')
      .should('contain', error.lastName)
      .should('have.css', 'color', 'rgb(244, 67, 54)');
    cy.get('p.MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error.Mui-required')
      .should('contain', error.username)
      .should('have.css', 'color', 'rgb(244, 67, 54)');
    cy.get('p.MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error.Mui-required')
      .should('contain', error.password)
      .should('have.css', 'color', 'rgb(244, 67, 54)');
    cy.get('p.MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error.Mui-required')
      .should('contain', error.confirmPassword)
      .should('have.css', 'color', 'rgb(244, 67, 54)');
  }

}