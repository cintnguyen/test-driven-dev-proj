describe('cypress demo', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.get("[data-testid='hello']")
      .should("exist")
      .should("have.text", "Hello Vite!")
  })
})