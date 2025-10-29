describe('Demonstrating Shadow DOM ', () => {
    it('select dropdown by value', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')  
        cy.get('#shadow_host').shadow().within(() => {
            cy.get('input[placeholder="Name"]').type('ireti');
            cy.get('input[placeholder="Email"]').type('sanguine@yopmail.com');
        });
    })
})
