let data
let dynamicText

describe('Dummy Ticket & Hotel Journey', () => {
  before('load elements', () => {
    cy.fixture('elements').then(sel => {
      data = sel
      dynamicText = `Jane-${Date.now()}`;
    })
  })
  it('buy a ticket and book an hotel', () => {
    cy.visit('/')
    cy.clickAnyElement(data.buyticketLink)
    cy.clickAnyElement(data.radioTicketAndHotel)
    cy.insertAnyText(data.firstNameField, dynamicText)
    cy.insertAnyText(data.lastNameField, dynamicText)
    cy.insertAnyText(data.dob, Date.now())
    cy.clickAnyElement(data.sex)
    cy.insertAnyText(data.fromCity, "Lagos")
    cy.insertAnyText(data.toCity, "Abuja")
    cy.insertAnyText(data.departureDate, Date.now())
    cy.insertAnyText(data.phone, "+2349048542119")
    cy.insertAnyText(data.emailAddress, "haliway@yopmail.com")
    // cy.clickAnyElement(data.country).select('1')
    cy.clickAnyElement(data.country)
    cy.insertAnyText(data.searchCountry, "Nigeria")
    cy.insertAnyText(data.selectCountry, "Nigeria")
    cy.insertAnyText(data.streetAddress1, "Jupiter Avenue")
    cy.insertAnyText(data.streetAddress2, "Roundabout")
    cy.insertAnyText(data.town, "Lagos")
    cy.clickAnyElement(data.state)
    cy.insertAnyText(data.searchState, "Lagos")
    cy.clickAnyElement(data.stateOption, "Lagos")
    cy.enterStripeCardDetails(
      "4242424242424242",
      "12/30",
      "123",
    );
    cy.clickAnyElement(data.placeOrder)
  })
})