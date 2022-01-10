export const RandomData = {
  newUser: {
    firstName: 'FirstName' + `${Math.round(Math.random() * 10000)}`,
    lastName: 'LastName' + `${Math.round(Math.random() * 10000)}`,
    username: 'Username' + `${Math.round(Math.random() * 10000)}`,
    password: 'Qwerty123!',
    confirmPassword: 'Qwerty123!',
    shortPassword: 'Q1!',
    differentConfirmPassword: 'Qwerty456!'
  },

  editUser: {
    firstName: 'FirstName' + `${Math.round(Math.random() * 10000)}`,
    lastName: 'LastName' + `${Math.round(Math.random() * 10000)}`,
    email: 'test@mail.com',
    phoneNumber: '123456'
  },

  newBankAcc: {
    bankName: 'BankName' + `${Math.round(Math.random() * 10000)}`,
    routingNumber: '123456789',
    accountNumber: '123456789',
  }
}