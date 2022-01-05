export class SignUp {
  visit() {
    cy.visit('/signup');
  }

  fullLogo() {
    return cy.get('[fill="currentColor"]')
  }

  logo1() {
    return cy.get('[fill-rule="evenodd"]').find('path:first-child')
  }

  logo2() {
    return cy.get('[fill-rule="evenodd"]').find('path:last-child')
  }

  namePage() {
    return cy.get('h1.MuiTypography-root.MuiTypography-h5')
  }

  button() {
    return cy.get('[data-test="signup-submit"]')
  }

  linkSignIn() {
    return cy.get('[href="/signin"]')
  }

  fieldFirstName() {
    return cy.get('[data-test="signup-first-name"]')
  }
  fieldLastName() {
    return cy.get('[data-test="signup-last-name"]')
  }

  fieldUsername() {
    return cy.get('[data-test="signup-username"]')
  }

  fieldPassword() {
    return cy.get('[data-test="signup-password"]')
  }
  
  fieldConfirmPassword() {
    return cy.get('[data-test="signup-confirmPassword"]')
  }

  errorMessage() {
    return cy.get('p.MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error.Mui-required')
  }
  
}