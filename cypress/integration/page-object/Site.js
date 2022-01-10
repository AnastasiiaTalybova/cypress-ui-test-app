export class Site {

  buttonNext() {
    return cy.get('[data-test="user-onboarding-next"]')
  }

  nameWindowBankAcc() {
    return cy.get('div[data-test="user-onboarding-dialog-title"] h2.MuiTypography-root.MuiTypography-h6')
  }

  bankName() {
    return cy.get('#bankaccount-bankName-input')
  }

  routingNumber() {
    return cy.get('#bankaccount-routingNumber-input')
  }

  accountNumber() {
    return cy.get('#bankaccount-accountNumber-input')
  }

  buttonSaveBankAcc() {
    return cy.get('[data-test="bankaccount-submit"]')
  }

  errorMessageBankName() {
    return cy.get('p#bankaccount-bankName-input-helper-text')
  }

  errorMessageRoutingNumber() {
    return cy.get('p#bankaccount-routingNumber-input-helper-text')
  }

  errorMessageAccountNumber() {
    return cy.get('p#bankaccount-accountNumber-input-helper-text')
  }

  buttonDone() {
    return cy.get('[data-test="user-onboarding-next"]')
  }

  buttonMenu() {
    return cy.get('a.MuiButtonBase-root.MuiListItem-root.MuiListItem-gutters.MuiListItem-button')
  }

  buttonCreateBankAcc() {
    return cy.get('a[data-test="bankaccount-new"]')
  }

  nameWindowUserSetting() {
    return cy.get('h2.MuiTypography-root.MuiTypography-h6.MuiTypography-colorPrimary.MuiTypography-gutterBottom')
  }

  editMyAccFirstName() {
    return cy.get('#user-settings-firstName-input')
  }

  editMyAccLastName() {
    return cy.get('#user-settings-lastName-input')
  }

  editMyAccEmail() {
    return cy.get('#user-settings-email-input')
  }

  editMyAccPhoneNumber() {
    return cy.get('#user-settings-phoneNumber-input')
  }

  buttonSaveMyAcc() {
    return cy.get('[data-test="user-settings-submit"]')
  }
}