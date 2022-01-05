// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import {SignUp} from '../integration/page-object/SignUp';
import {SignIn} from '../integration/page-object/SignIn';
import {RandomData} from '../integration/page-object/RandomData';
import TestData from '../integration/page-object/TestData';

const signUp = new SignUp();
const signIn = new SignIn();
const data = TestData;
const testData = RandomData;

Cypress.Commands.add('clickAllSingUpFields', () => {
  signUp.fieldFirstName().click();
  signUp.fieldLastName().click();
  signUp.fieldUsername().click();
  signUp.fieldPassword().click();
  signUp.fieldConfirmPassword().click();
})

Cypress.Commands.add('registration', () => {
  signUp.visit();
  signUp.fieldFirstName().type('{selectall}').type(testData.newUser.firstName);
  signUp.fieldLastName().type('{selectall}').type(testData.newUser.lastName);
  signUp.fieldUsername().type('{selectall}').type(testData.newUser.username);
  signUp.fieldPassword().type('{selectall}').type(testData.newUser.password);
  signUp.fieldConfirmPassword().type('{selectall}').type(testData.newUser.confirmPassword);
  signUp.button().should('contain', data.button.signUp).should('not.be.disabled').click();
})

Cypress.Commands.add('login', () => {
  signIn.visit();
  signIn.fieldUsername().type('{selectall}').type(testData.newUser.username);
  signIn.fieldPassword().type('{selectall}').type(testData.newUser.password);
  signIn.button().should('contain', data.button.signIn).click();
})

Cypress.Commands.add('loginCheckbox', () => {
  signIn.visit();
  signIn.fieldUsername().type('{selectall}').type(testData.newUser.username);
  signIn.fieldPassword().type('{selectall}').type(testData.newUser.password);
  signIn.checkboxLogin().check().should('be.checked');
  signIn.button().should('contain', data.button.signIn).click();
})