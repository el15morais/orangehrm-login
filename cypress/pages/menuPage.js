class MenuPage{
    
    selectorsList(){
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
        }
        return selectors
    }

    accessMyInfo(){
        cy.get(this.selectorsList().selectors.myInfoButton).click()
    }
}

export default MenuPage