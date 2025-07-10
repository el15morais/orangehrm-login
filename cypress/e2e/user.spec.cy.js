import userData from '../fixtures/user-data.json'

describe('OrangeHRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashBoardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    InfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    FirstNameField: ".oxd-input[name='firstName']",
    MidleNameField: "[name='middleName']",
    LastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dataField: "[placeholder='yyyy-dd-mm']",
    saveButton: "[type='submit']",
  }


  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equals', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashBoardGrid)
    cy.get(selectorsList.InfoButton).click()
    cy.get(selectorsList.FirstNameField).clear().type('FirstName Test')
    cy.get(selectorsList.MidleNameField).clear().type('MidleName Test')
    cy.get(selectorsList.LastNameField).clear().type('LastName Test')
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('Other Test')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriverLicense')
    cy.get(selectorsList.dataField).eq(0).clear().type('2025-06-30')
    cy.get(selectorsList.dataField).eq(0).click()
    cy.get(selectorsList.saveButton).eq(0).click()
    cy.get('.oxd-toast--success')
  })
    it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})