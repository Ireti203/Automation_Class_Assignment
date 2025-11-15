export default class PageActions {
                elements = {
                    buyticketLink : ".menu-container a[href*=\"dummy-ticket-for-visa-application\"]",
                    url : "https://dummyticket.com/",
                    radioTicketAndHotel: "#checkout-products>li:nth-of-type(4) input",
                    firstNameField : "#travname",
                    lastNameField : "travlastname",
                    dob : "#dob"               
                }


               clickAnyElement(element){
                    cy.get(element).should('be.visible').click()
                }

                insertAnyText(textField, text){
                    cy.get(textField).should('be.visible').fill(text)
                }

                verifyElementText(element,text){
                    cy.get(element).should('be.visible').and('contain.text',text)
                }

}