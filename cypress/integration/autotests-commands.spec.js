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

describe('For new User (mock)', () => {

  it('Registration new User (mock)', () => {
    signUp.visit();
    cy.intercept('POST', '/users', {
      fixture: 'registrationResponse.json',
    })
    signUp.fieldFirstName().type('{selectall}').type(testData.newUser.firstName);
    signUp.fieldLastName().type('{selectall}').type(testData.newUser.lastName);
    signUp.fieldUsername().type('{selectall}').type(testData.newUser.username);
    signUp.fieldPassword().type('{selectall}').type(testData.newUser.password);
    signUp.fieldConfirmPassword().type('{selectall}').type(testData.newUser.confirmPassword);
    signUp.button().should('contain', data.button.signUp).should('not.be.disabled').click();
  })

  it('User can login like new User without registration (mock)', () => {
    signIn.visit();
    cy.intercept('POST', '/login', {
      fixture: 'loginResponse.json',
    })
    signIn.fieldUsername().type('{selectall}').type(testData.newUser.username);
    signIn.fieldPassword().type('{selectall}').type(testData.newUser.password);
    signIn.button().should('contain', data.button.signIn).click();
    signIn.firstWindow().should('contain', data.windowText.first).should('exist')
      .should('have.css', 'color', data.color.black);
    site.buttonNext().should('contain', data.button.next).click();
  })

  it('Create first Bank Account (mock)', () => {
    cy.intercept('POST', '/graphql', {
      fixture: 'createBankAccResponse.json',
    })
    site.bankName().type('{selectall}').type(testData.newBankAcc.bankName);
    site.routingNumber().type('{selectall}').type(testData.newBankAcc.routingNumber);
    site.accountNumber().type('{selectall}').type(testData.newBankAcc.accountNumber);
    site.buttonSaveBankAcc().should('contain', data.button.save).click();
    site.nameWindowBankAcc().should('contain', data.windowText.finished).should('be.visible')
      .should('have.css', 'color', data.color.black);
    site.buttonDone().should('contain', data.button.done).click();
  })

  it('Create new Bank Account (mock)', () => {
    site.buttonMenu().eq(2).should('contain', data.menu.bankAcc).should('be.visible').click();
    site.buttonCreateBankAcc().should('contain', data.button.createBankAcc).should('be.visible').click({force: true});
    cy.intercept('POST', '/graphql', {
      fixture: 'createBankAccResponse.json',
    })
    site.bankName().type('{selectall}').type(testData.newBankAcc.bankName);
    site.routingNumber().type('{selectall}').type(testData.newBankAcc.routingNumber);
    site.accountNumber().type('{selectall}').type(testData.newBankAcc.accountNumber);
    site.buttonSaveBankAcc().should('contain', data.button.save).click();
  })

  it('Edit My Account (mock)', () => {
    site.buttonMenu().eq(1).should('contain', data.menu.myAcc).should('be.visible').click();
    cy.intercept('PATCH', '/users/3fsQK-3FH', {
      fixture: 'myAccountResponse.json',
    })
    site.editMyAccFirstName().type('{selectall}').type(testData.editUser.firstName);
    site.editMyAccLastName().type('{selectall}').type(testData.editUser.lastName);
    site.editMyAccEmail().type('{selectall}').type(testData.editUser.email);
    site.editMyAccPhoneNumber().type('{selectall}').type(testData.editUser.phoneNumber);
    site.buttonSaveMyAcc().should('contain', data.button.save).click();
  })
})