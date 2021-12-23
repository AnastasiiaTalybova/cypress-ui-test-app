// autotests.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Sign Up', () => {
  before(() => {
    cy.visit('/signup');
    cy.get('[name="firstName"]').click();
    cy.get('[name="lastName"]').click();
    cy.get('[name="username"]').click();
    cy.get('[name="password"]').click();
    cy.get('[name="confirmPassword"]').click();
    cy.get('[fill="currentColor"]').click();
  })

  it('Contains elements on "Sing Up" page', () => {
    cy.get('[fill-rule="evenodd"]').find('path:first-child').should('be.visible');
    cy.get('[fill-rule="evenodd"]').find('path:last-child').should('be.visible');
    cy.contains('h1.MuiTypography-root.MuiTypography-h5', 'Sign Up').should('be.visible').should('exist');
    cy.contains('span.MuiButton-label', 'Sign Up').should('be.visible').should('exist');
    cy.contains('[href="/signin"]', 'Sign In').should('be.visible').should('exist');
  })

  it('Contains fields on "Sing Up" page', () => {
    cy.contains('[for="firstName"]', 'First Name').should('exist').should('be.visible');
    cy.contains('[for="lastName"]', 'Last Name').should('exist').should('be.visible');
    cy.contains('[for="username"]', 'Username').should('exist').should('be.visible');
    cy.contains('[for="password"]', 'Password').should('exist').should('be.visible');
    cy.contains('[for="confirmPassword"]', 'Confirm Password').should('exist').should('be.visible');
  })

  it('Contains error message on "Sing Up" page', () => {
    cy.contains('p.MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error.Mui-required', 'First Name is require')
      .should('exist')
      .should('be.visible');
    cy.contains('p.MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error.Mui-required', 'Last Name is required')
      .should('exist')
      .should('be.visible');
    cy.contains('p.MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error.Mui-required', 'Username is required')
      .should('exist')
      .should('be.visible');
    cy.contains('p.MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error.Mui-required', 'Enter your password')
      .should('exist')
      .should('be.visible');
    cy.contains('p.MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error.Mui-required', 'Confirm your password')
      .should('exist')
      .should('be.visible');
  })
})

describe('Sign In', () => {
  before(() => {
    cy.visit('/signin');
    cy.get('[name="username"]').click();
    cy.get('[name="password"]').type('1');
    cy.get('[fill="currentColor"]').click();
  })

  it('Contains elements on "Sing In" page', () => {
    cy.get('[fill-rule="evenodd"]').find('path:first-child').should('be.visible');
    cy.get('[fill-rule="evenodd"]').find('path:last-child').should('be.visible');
    cy.contains('h1.MuiTypography-root.MuiTypography-h5', 'Sign in').should('be.visible').should('exist');
    cy.contains('label.MuiFormControlLabel-root', 'Remember me').should('be.visible').should('exist');
    cy.contains('[data-test="signin-submit"]', 'Sign In').should('be.visible').should('exist');
    cy.contains('[href="/signup"]', 'Sign Up').should('be.visible').should('exist');
  })

  it('Contains fields on "Sing In" page', () => {
    cy.contains('[for="username"]', 'Username').should('exist').should('be.visible');
    cy.contains('[for="password"]', 'Password').should('exist').should('be.visible');
  })

  it('Contains error message on "Sing In" page', () => {
    cy.contains('p#username-helper-text', 'Username is required')
      .should('exist')
      .should('be.visible');
    cy.contains('p#password-helper-text', 'Password must contain at least 4 characters')
      .should('exist')
      .should('be.visible');
  })
})

describe('Registration and Login', () => {
  const user = {
    firstName: 'FirstName' + `${Math.round(Math.random() * 10000)}`,
    lastName: 'LastName' + `${Math.round(Math.random() * 10000)}`,
    username: 'Username' + `${Math.round(Math.random() * 10000)}`,
    password: 'Qwerty123!',
    confirmPassword: 'Qwerty123!',
  }
  
  it('Registration', () => {
    cy.visit('/signup');
    cy.get('[name="firstName"]').type('{selectall}').type(user.firstName);
    cy.get('[name="lastName"]').type('{selectall}').type(user.lastName);
    cy.get('[name="username"]').type('{selectall}').type(user.username);
    cy.get('[name="password"]').type('{selectall}').type(user.password);
    cy.get('[name="confirmPassword"]').type('{selectall}').type(user.confirmPassword);
    cy.contains('span.MuiButton-label', 'Sign Up').click();
    cy.url().should('include', '/signin');    
  })

  it('Login', () => {
    cy.visit('/signin');
    cy.get('[name="username"]').type('{selectall}').type(user.username);
    cy.get('[name="password"]').type('{selectall}').type(user.password);
    cy.contains('[data-test="signin-submit"]', 'Sign In').click();
    cy.contains('div.MuiDialogTitle-root', 'Get Started with Real World App').should('exist');
  })

  it('Login with checkbox "Remember me"', () => {
    cy.clearCookies();
    cy.visit('/signin');
    cy.get('[name="username"]').type('{selectall}').type(user.username);
    cy.get('[name="password"]').type('{selectall}').type(user.password);
    cy.get('[type="checkbox"]').check();
    cy.contains('[data-test="signin-submit"]', 'Sign In').click();
    cy.contains('div.MuiDialogTitle-root', 'Get Started with Real World App').should('exist');
  })

})
