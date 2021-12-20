/// <reference types ="cypress" />

describe('Create New campaign', function(){

   //before hook
   before(function(){
   cy.fixture('login').then(function(data){

    this.data = data
  
      })

   })

  it('Login to Phrasee', function(){

    cy.visit('https://app-qa.phrasee.co/login')
  
    //loaded a test data from fixtures 
    cy.get('input[name=email]').type(this.data.email)
    cy.get('input[name=password]').type(this.data.password)
    cy.get('#phrasee > div > div.login_box > form > div.submit > button').click()
   
})

it('Create New Campaign', function(){

  cy.get('[data-cy=create-campaign-mi]').click()
  cy.get('[data-cy="email"] > :nth-child(1)').click()
  cy.get(".ant-select-selection__placeholder").click()
  cy.get(".ant-select-dropdown-menu-item").contains('External automation project').click()
  cy.get('[data-cy=campaign-setup-campaign-name]').type('test')
  cy.get('[data-cy=campaign-setup-campaign-own-sl]').type('Human Line')
  cy.get('[data-cy=campaign-setup-list-size]').type('500000')
  cy.get('[data-cy=campaign-setup-baseline-open-rate]').type('10%')
  cy.get('[data-cy=campaign-setup-submit-button]').click()

})

})