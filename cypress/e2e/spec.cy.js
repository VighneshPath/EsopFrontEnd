describe('template spec', () => {
  beforeEach(()=>{
    cy.intercept('POST', 'http://127.0.0.1:8080/user/vighnesh/order', {
      fixture: "order.json",
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*', 
      },
    })
  })
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/src/index.html');

    cy.get(".form-group button").click();

    cy.get("#order-response").find("p").first()
      .should("have.text", "User doesn't exist")

    cy.get("#order-response").find("p").last()
    .should("have.text", "Invalid quantity")
  })
})