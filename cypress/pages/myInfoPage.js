class MyInfoPage{

    selectorsList(){
        const selectors = {
            FirstNameField: ".oxd-input[name='firstName']",
            MidleNameField: "[name='middleName']",
            LastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dataField: "[placeholder='yyyy-dd-mm']",
            saveButton: "[type='submit']",
            selectorText: ".oxd-select-text",
        }
        return selectors
    }

    fillPersonalDetails(firstName, midName, lastName){
        cy.get(this.selectorsList().FirstNameField).clear().type(firstName)
        cy.get(this.selectorsList().MidleNameField).clear().type(midName)
        cy.get(this.selectorsList().LastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(Employee, OtherId, DriverLicenseDate, data){
        cy.get(this.selectorsList().genericField).eq(4).clear().type(Employee)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(OtherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(DriverLicenseDate)
        cy.get(this.selectorsList().dataField).eq(0).clear().type(data)
        cy.get(this.selectorsList().dataField).eq(0).click()
        cy.get(this.selectorsList().selectorText).eq(0).click()
        cy.get('.oxd-select-dropdown > :nth-child(4)').click()
    }

    saveForm(){
        cy.get(this.selectorsList().saveButton).eq(0).click()({force: true})
        cy.get('.oxd-toast--success')
    }
}

export default MyInfoPage