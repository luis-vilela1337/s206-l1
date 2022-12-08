function registerUser() {
  const timestamp = new Date().toISOString();
  const name = "user" + timestamp+ "@gmail.com";
  const password = "password" + timestamp;

  cy.visit('https://selectorshub.com/xpath-practice-page/')
  cy.get('#userId').type(name)
  cy.get('#pass').type(name)
  cy.get('.element-companyId > .form-group > .input-group > [name="company"]').type(name)
  cy.get('.element-companyId > .form-group > .input-group > [name="mobile number"]').type(3232)
  cy.get('[value="Submit"]').click()

  return { name, password };
}

describe('enter on selector spec', () => {
  it('create a user and submit', () => {
    cy.visit('https://demoqa.com/')
    cy.get('.category-cards > :nth-child(2)').click()
    cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()
    cy.get('#firstName').type('nome 1')
    cy.get('#lastName').type('nome 2')
    cy.get('#userEmail').type("valid@gmail.com")
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()

  })
})