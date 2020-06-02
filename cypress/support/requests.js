Cypress.Commands.add('allSimulacao', () => {
    cy.request({
        method: 'GET',
        url: './',
        failOnStatusCode: false 
    })
})