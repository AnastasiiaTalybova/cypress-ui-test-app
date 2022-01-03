/// <reference types="cypress" />

/*import {SignUp} from "../integration/page-object/SignUp";

describe('Sign Up', () => {
  const signUp = new SignUp();


  before(() => {
    signUp.visit();
  })

})*/

/*import SignUp from "../integration/page-object/SignUp";

describe('Sign Up', () => {
  before(() => {
    SignUp.visit();
  })

})*/

import {SignUp} from '../integration/page-object/SignUp';
import {SignIn} from '../integration/page-object/SignIn';
import {NewUser} from '../integration/page-object/Registration-Login';

const signUp = new SignUp();
const signIn = new SignIn();
const newUser = new NewUser();

describe('Sign Up', () => {
    
  before(() => {
    signUp.visit();
  })

  it('Contains elements on "Sing Up" page', () => {
    signUp.checkElement();
  })

  it('Contains fields on "Sing Up" page', () => {
    signUp.checkField();
  })

  it('Contains error message on "Sing Up" page', () => {
    signUp.checkError();
  })

  it('Check color for elements with error message on "Sing Up" page', () => {
    signUp.checkcolor();
  })
})

describe('Sign In', () => {
  before(() => {
    signIn.visit();
  })

  it('Contains elements on "Sing In" page', () => {
    signIn.checkElement();
  })

  it('Contains fields on "Sing In" page', () => {
    signIn.checkField();
  })

  it('Contains error message on "Sing In" page', () => {
    signIn.checkError();
  })

  it('Check color for elements with error message on "Sing In" page', () => {
    signIn.checkcolor();
  })
})

describe('Registration and Login for new User', () => {
  it('Registration for new User', () => {
    signUp.visit();
    newUser.registration();
  })

  it('Login like User', () => {
    signIn.visit();
    newUser.login();
  })

  it('Login like User with checkbox "Remember me"', () => {
    cy.clearCookies();
    signIn.visit();
    newUser.loginRememberMe();
  })
})