export class SignIn {
  visit() {
    cy.visit('/signin');
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

  checkboxFull() {
    return cy.get('span.MuiIconButton-label')
  }

  checkboxLogin() {
    return cy.get('span.MuiIconButton-label').should('be.visible').find('[name="remember"]')
  }

  checkboxText() {
    return cy.get('label.MuiFormControlLabel-root')
  }

  button() {
    return cy.get('[data-test="signin-submit"]')
  }

  linkSignIn() {
    return cy.get('[href="/signup"]')
  }

  fieldUsername() {
    return cy.get('[data-test="signin-username"]')
  }

  fieldPassword() {
    return cy.get('[data-test="signin-password"]')
  }

  errorMessageUsername() {
    return cy.get('p#username-helper-text')
  }

  errorMessagePassword() {
    return cy.get('p#password-helper-text')
  }

  firstWindow() {
    return cy.get('div.MuiDialogTitle-root')
  }
}