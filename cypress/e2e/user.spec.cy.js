import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('OrangeHRM Tests', () => {

  const selectorsList = {
    FirstNameField: ".oxd-input[name='firstName']",
    MidleNameField: "[name='middleName']",
    LastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dataField: "[placeholder='yyyy-dd-mm']",
    saveButton: "[type='submit']",
    selectorText: ".oxd-select-text",
  }


  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
  
    // cy.get(selectorsList.FirstNameField).clear().type('FirstName Test')
    // cy.get(selectorsList.MidleNameField).clear().type('MidleName Test')
    // cy.get(selectorsList.LastNameField).clear().type('LastName Test')
    // cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    // cy.get(selectorsList.genericField).eq(5).clear().type('Other Test')
    // cy.get(selectorsList.genericField).eq(6).clear().type('DriverLicense')
    // cy.get(selectorsList.dataField).eq(0).clear().type('2025-06-30')
    // cy.get(selectorsList.dataField).eq(0).click()
    // cy.get(selectorsList.selectorText).eq(0).click()
    // cy.get('.oxd-select-dropdown > :nth-child(4)').click()
    // cy.get(selectorsList.saveButton).eq(0).click()({force: true})
    // cy.get('.oxd-toast--success')
  })
  //   it('Login - Fail', () => {
  //   cy.visit('/auth/login')
  //   cy.get(selectorsList.usernameField).type(userData.userFail.username)
  //   cy.get(selectorsList.passwordField).type(userData.userFail.password)
  //   cy.get(selectorsList.loginButton).click()
  //   cy.get(selectorsList.wrongCredentialAlert)
  // })
})