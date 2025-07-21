class DashboardPage{
    
    selectorsList(){
        const selectors = {
            dashBoardGrid: ".orangehrm-dashboard-grid",
        }
        return selectors
    }

    checkDashboardPage(){
        cy.location('pathname').should('equals', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashBoardGrid).should('be visible')
    }
}

export default DashboardPage