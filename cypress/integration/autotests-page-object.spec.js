/// <reference types="cypress" />

import {SignUp} from './page-object/SignUp';
import {SignIn} from './page-object/SignIn';
import {RandomData} from './page-object/RandomData';
import TestData from './page-object/TestData';
import {Site} from './page-object/Site';

const signUp = new SignUp();
const signIn = new SignIn();
const data = TestData;
const testData = RandomData;
const site = new Site();

describe('Sign Up', () => {

  before(() => {
    signUp.visit();
  })

  it('Contains elements on "Sing Up" page', () => {
    signUp.logo1().should('be.visible');
    signUp.logo2().should('be.visible');
    signUp.namePage().should('contain', data.namePage.signUp).should('be.visible');
    signUp.button().should('contain', data.button.signUp).should('be.visible');
    signUp.linkSignIn().should('contain', data.link.signIn).should('be.visible');
  })

  it('Contains fields on "Sing Up" page', () => {
    signUp.fieldFirstName().should('contain', data.field.firstName).should('be.visible');
    signUp.fieldLastName().should('contain', data.field.lastName).should('be.visible');
    signUp.fieldUsername().should('contain', data.field.username).should('be.visible');
    signUp.fieldPassword().should('contain', data.field.password).should('be.visible');
    signUp.fieldConfirmPassword().should('contain', data.field.confirmPassword).should('be.visible');
  })

  it('Contains error message on "Sing Up" page', () => {
    signUp.fieldFirstName().click();
    signUp.fieldLastName().click();
    signUp.fieldUsername().click();
    signUp.fieldPassword().click();
    signUp.fieldConfirmPassword().click();
    signUp.fullLogo().click();
    signUp.errorMessage().eq(0)
      .should('contain', data.error.firstName)
      .should('be.visible');
    signUp.errorMessage().eq(1)
      .should('contain', data.error.lastName)
      .should('be.visible');
    signUp.errorMessage().eq(2)
      .should('contain', data.error.username)
      .should('be.visible');
    signUp.errorMessage().eq(3)
      .should('contain', data.error.password)
      .should('be.visible');
    signUp.errorMessage().eq(4)
      .should('contain', data.error.confirmPassword)
      .should('be.visible');
    signUp.fieldPassword().type('1');
    signUp.fieldConfirmPassword().type('2');
    signUp.errorMessage()
      .should('contain', data.error.shortPassword)
      .should('be.visible');
    signUp.errorMessage()
      .should('contain', data.error.differentConfirmPassword)
      .should('be.visible');
  })

  it('Check color for elements and error message on "Sing Up" page', () => {
    signUp.logo1()
      .should('have.css', 'color', data.color.blue);
      signUp.logo2()
      .should('have.css', 'color', data.color.blue);
    signUp.namePage()
      .should('contain', 'Sign Up')
      .should('have.css', 'color', data.color.black);
    signUp.errorMessage().eq(0)
      .should('contain', data.error.firstName)
      .should('have.css', 'color', data.color.red);
    signUp.errorMessage().eq(1)
      .should('contain', data.error.lastName)
      .should('have.css', 'color', data.color.red);
    signUp.errorMessage().eq(2)
      .should('contain', data.error.username)
      .should('have.css', 'color', data.color.red);
    signUp.errorMessage().eq(3)
      .should('contain', data.error.shortPassword)
      .should('have.css', 'color', data.color.red);
    signUp.errorMessage().eq(4)
      .should('contain', data.error.differentConfirmPassword)
      .should('have.css', 'color', data.color.red);
    signUp.fieldPassword().type('{selectall}').type('{backspace}');
    signUp.fieldConfirmPassword().type('{selectall}').type('{backspace}');
    signUp.errorMessage().eq(3)
      .should('contain', data.error.password)
      .should('have.css', 'color', data.color.red);
    signUp.errorMessage().eq(4)
      .should('contain', data.error.confirmPassword)
      .should('have.css', 'color', data.color.red);
    signUp.button()
      .should('contain', data.button.signUp)
      .should('be.disabled')
      .should('have.css', 'color', data.color.lightGray);
    signUp.fieldFirstName().type('{selectall}').type(testData.newUser.firstName);
    signUp.fieldLastName().type('{selectall}').type(testData.newUser.lastName);
    signUp.fieldUsername().type('{selectall}').type(testData.newUser.username);
    signUp.fieldPassword().type('{selectall}').type(testData.newUser.password);
    signUp.fieldConfirmPassword().type('{selectall}').type(testData.newUser.confirmPassword);
    signUp.button()
      .should('contain', data.button.signUp)
      .should('not.be.disabled')
      .should('have.css', 'background-color', data.color.blue);
  })

})

describe('Sign In', () => {

  before(() => {
    signIn.visit();
  })

  it('Contains elements on "Sing In" page', () => {
    signIn.logo1().should('be.visible');
    signIn.logo2().should('be.visible');
    signIn.namePage().should('contain', data.namePage.signIn).should('be.visible');
    signIn.checkboxLogin().should('be.not.checked');
    signIn.checkboxText().should('contain', 'Remember me').should('be.visible');
    signIn.button().should('contain', data.button.signIn).should('be.visible');
    signIn.linkSignIn().should('contain',  data.link.signUp).should('be.visible');
  })

  it('Contains fields on "Sing In" page', () => {
    signIn.fieldUsername().should('contain', data.field.username).should('be.visible');
    signIn.fieldPassword().should('contain', data.field.password).should('be.visible');
  })

  it('Contains error message on "Sing In" page', () => {
    signIn.fieldUsername().click();
    signIn.fieldPassword().type('1');
    signIn.fullLogo().click();
    signIn.errorMessageUsername()
      .should('contain', data.error.username)
      .should('be.visible');
    signIn.errorMessagePassword()
      .should('contain', data.error.shortPassword)
      .should('be.visible');
  })

  it('Check color for elements and error message on "Sing In" page', () => {
    signIn.logo1()
      .should('have.css', 'color', data.color.blue);;
    signIn.logo2()
      .should('have.css', 'color', data.color.blue);
    signIn.namePage()
      .should('contain', 'Sign in')
      .should('have.css', 'color', data.color.black);
    signIn.errorMessageUsername()
      .should('contain', data.error.username)
      .should('have.css', 'color', data.color.red);
    signIn.errorMessagePassword()
      .should('contain', data.error.shortPassword)
      .should('have.css', 'color', data.color.red);
    signIn.checkboxFull()
      .should('have.css', 'color', data.color.darkGrey);
    signIn.checkboxText()
      .should('contain', 'Remember me')
      .should('have.css', 'color', data.color.black);
    signIn.checkboxFull()
      .click()
      .should('have.css', 'color', data.color.blue);
    signIn.button()
      .should('contain', data.button.signIn)
      .should('be.disabled')
      .should('have.css', 'color', data.color.lightGray);
    signIn.fieldUsername().type('{selectall}').type(testData.newUser.username);
    signIn.fieldPassword().type('{selectall}').type(testData.newUser.password);
    signIn.button()
      .should('contain', data.button.signIn)
      .should('not.be.disabled')
      .should('have.css', 'background-color', data.color.blue);
  })
})

describe('Registration and Login for new User', () => {
  it(`User can't register with empty the "First Name" field`, () => {
    signUp.visit();
    signUp.fieldLastName().type('{selectall}').type(testData.newUser.lastName);
    signUp.fieldUsername().type('{selectall}').type(testData.newUser.username);
    signUp.fieldPassword().type('{selectall}').type(testData.newUser.password);
    signUp.fieldConfirmPassword().type('{selectall}').type(testData.newUser.confirmPassword);
    signUp.button().should('contain', data.button.signUp).should('be.disabled');
  })

  it(`User can't register with empty the "Last Name" field`, () => {
    signUp.visit();
    signUp.fieldFirstName().type('{selectall}').type(testData.newUser.firstName);
    signUp.fieldUsername().type('{selectall}').type(testData.newUser.username);
    signUp.fieldPassword().type('{selectall}').type(testData.newUser.password);
    signUp.fieldConfirmPassword().type('{selectall}').type(testData.newUser.confirmPassword);
    signUp.button().should('contain', data.button.signUp).should('be.disabled');
  })

  it(`User can't register with empty the "Username" field`, () => {
    signUp.visit();
    signUp.fieldFirstName().type('{selectall}').type(testData.newUser.firstName);
    signUp.fieldLastName().type('{selectall}').type(testData.newUser.lastName);
    signUp.fieldPassword().type('{selectall}').type(testData.newUser.password);
    signUp.fieldConfirmPassword().type('{selectall}').type(testData.newUser.confirmPassword);
    signUp.button().should('contain', data.button.signUp).should('be.disabled');
  })

  it(`User can't register with empty the "Password" field`, () => {
    signUp.visit();
    signUp.fieldFirstName().type('{selectall}').type(testData.newUser.firstName);
    signUp.fieldLastName().type('{selectall}').type(testData.newUser.lastName);
    signUp.fieldUsername().type('{selectall}').type(testData.newUser.username);
    signUp.fieldConfirmPassword().type('{selectall}').type(testData.newUser.confirmPassword);
    signUp.button().should('contain', data.button.signUp).should('be.disabled');
  })

  it(`User can't register with empty the "Confirm Password" field`, () => {
    signUp.visit();
    signUp.fieldFirstName().type('{selectall}').type(testData.newUser.firstName);
    signUp.fieldLastName().type('{selectall}').type(testData.newUser.lastName);
    signUp.fieldUsername().type('{selectall}').type(testData.newUser.username);
    signUp.fieldPassword().type('{selectall}').type(testData.newUser.password);
    signUp.button().should('contain', data.button.signUp).should('be.disabled');
  })

  it(`User can't register when the password is short`, () => {
    signUp.visit();
    signUp.fieldFirstName().type('{selectall}').type(testData.newUser.firstName);
    signUp.fieldLastName().type('{selectall}').type(testData.newUser.lastName);
    signUp.fieldUsername().type('{selectall}').type(testData.newUser.username);
    signUp.fieldPassword().type('{selectall}').type(testData.newUser.shortPassword);
    signUp.fieldConfirmPassword().type('{selectall}').type(testData.newUser.shortPassword);
    signUp.button().should('contain', data.button.signUp).should('be.disabled');
  })

  it(`User can't register with the different confirm password`, () => {
    signUp.visit();
    signUp.fieldFirstName().type('{selectall}').type(testData.newUser.firstName);
    signUp.fieldLastName().type('{selectall}').type(testData.newUser.lastName);
    signUp.fieldUsername().type('{selectall}').type(testData.newUser.username);
    signUp.fieldPassword().type('{selectall}').type(testData.newUser.password);
    signUp.fieldConfirmPassword().type('{selectall}').type(testData.newUser.differentConfirmPassword);
    signUp.button().should('contain', data.button.signUp).should('be.disabled');
  })

  it('User can register like new User', () => {
    signUp.visit();
    signUp.fieldFirstName().type('{selectall}').type(testData.newUser.firstName);
    signUp.fieldLastName().type('{selectall}').type(testData.newUser.lastName);
    signUp.fieldUsername().type('{selectall}').type(testData.newUser.username);
    signUp.fieldPassword().type('{selectall}').type(testData.newUser.password);
    signUp.fieldConfirmPassword().type('{selectall}').type(testData.newUser.confirmPassword);
    signUp.button().should('contain', data.button.signUp).should('not.be.disabled').click();
    cy.url().should('include', '/signin');
  })

  it(`User can't login with empty the "Username" field`, () => {
    signIn.visit();
    signIn.fieldPassword().type('{selectall}').type(testData.newUser.password);
    signIn.button().should('contain', data.button.signIn).should('be.disabled');
  })

  it(`User can't login with empty the "Password" field`, () => {
    signIn.visit();
    signIn.fieldUsername().type('{selectall}').type(testData.newUser.username);
    signIn.button().should('contain', data.button.signIn).should('be.disabled');
  })

  it('User can login like new User', () => {
    signIn.visit();
    signIn.fieldUsername().type('{selectall}').type(testData.newUser.username);
    signIn.fieldPassword().type('{selectall}').type(testData.newUser.password);
    signIn.button().should('contain', data.button.signIn).click();
    signIn.firstWindow().should('contain', data.windowText.first).should('exist');
  })

  it('User can login like new User with checkbox "Remember me"', () => {
    cy.clearCookies();
    signIn.visit();
    signIn.fieldUsername().type('{selectall}').type(testData.newUser.username);
    signIn.fieldPassword().type('{selectall}').type(testData.newUser.password);
    signIn.checkboxLogin().check().should('be.checked');
    signIn.button().should('contain', data.button.signIn).click();
    signIn.firstWindow().should('contain', data.windowText.first).should('exist');
  })
})

describe('"Create first Bank Account" window', () => {

  it('Contains elements at "Create first Bank Account" window', () => {
    signIn.firstWindow().should('contain', data.windowText.first).should('exist')
      .should('have.css', 'color', data.color.black);
    site.buttonNext().should('contain', data.button.next).click();
    site.nameWindowBankAcc().should('contain', data.windowText.firstBankAcc).should('be.visible');
    site.buttonSaveBankAcc().should('contain', data.button.save).should('be.visible');
  })

  it('Contains fields at "Create first Bank Account" window', () => {
    site.bankName().should('be.visible');
    site.routingNumber().should('be.visible');
    site.accountNumber().should('be.visible');
  })

  it('Contains error message at "Create first Bank Account" window', () => {
    site.bankName().click();
    site.routingNumber().click();
    site.accountNumber().click();
    site.nameWindowBankAcc().click();
    site.errorMessageBankName()
      .should('contain', data.error.bankName)
      .should('be.visible');
    site.errorMessageRoutingNumber()
      .should('contain', data.error.routingNumber)
      .should('be.visible');
    site.errorMessageAccountNumber()
      .should('contain', data.error.accountNumber)
      .should('be.visible');
  })

  it('Check color for elements and error message at "Create first Bank Account" window', () => {
    site.nameWindowBankAcc()
      .should('contain', data.windowText.firstBankAcc)
      .should('have.css', 'color', data.color.black);
    site.errorMessageBankName()
      .should('contain', data.error.bankName)
      .should('have.css', 'color', data.color.red);
    site.errorMessageRoutingNumber()
      .should('contain', data.error.routingNumber)
      .should('have.css', 'color', data.color.red);
    site.errorMessageAccountNumber()
      .should('contain', data.error.accountNumber)
      .should('have.css', 'color', data.color.red);
    site.buttonSaveBankAcc()
      .should('contain', data.button.save)
      .should('be.disabled')
      .should('have.css', 'color', data.color.lightGray);
    site.bankName().type('{selectall}').type(testData.newBankAcc.bankName);
    site.routingNumber().type('{selectall}').type(testData.newBankAcc.routingNumber);
    site.accountNumber().type('{selectall}').type(testData.newBankAcc.accountNumber);
    site.buttonSaveBankAcc()
      .should('contain', data.button.save)
      .should('not.be.disabled')
      .should('have.css', 'background-color', data.color.blue);
  })

  it('Create first Bank Account', () => {
    site.bankName().type('{selectall}').type(testData.newBankAcc.bankName);
    site.routingNumber().type('{selectall}').type(testData.newBankAcc.routingNumber);
    site.accountNumber().type('{selectall}').type(testData.newBankAcc.accountNumber);
    site.buttonSaveBankAcc().should('contain', data.button.save).click();
    site.nameWindowBankAcc().should('contain', data.windowText.finished).should('be.visible')
      .should('have.css', 'color', data.color.black);
    site.buttonDone().should('contain', data.button.done).click();
  })

    it('Create new Bank Account', () => {
      site.buttonMenu().eq(2).should('contain', data.menu.bankAcc).should('be.visible').click();
      site.buttonCreateBankAcc().should('contain', data.button.createBankAcc).should('be.visible').click({force: true});
      site.bankName().type('{selectall}').type(testData.newBankAcc.bankName);
      site.routingNumber().type('{selectall}').type(testData.newBankAcc.routingNumber);
      site.accountNumber().type('{selectall}').type(testData.newBankAcc.accountNumber);
      site.buttonSaveBankAcc().should('contain', data.button.save).click();
  })
})