/// <reference types ="cypress" />

//Imported the Page object class
import LoginPage from './PageObjects/Loginpage'

describe('Language Generation', function(){

    it('Login', function(){
     
        const login = new LoginPage()
        login.visit()
        login.fillEmail('mathumitha.cv@gmail.com')
        login.fillPassword('Mathumitha123#')
        login.Login()
        
    })

    it('Create New Campaign', function(){

        cy.get('[data-cy=create-campaign-mi]').click()
        cy.get('[data-cy="email"] > :nth-child(1)').click()
        cy.get(".ant-select-selection__placeholder").click()
        cy.get(".ant-select-dropdown-menu-item").click()
        cy.get('[data-cy=campaign-setup-campaign-name]').type('test')
        cy.get('[data-cy=campaign-setup-campaign-own-sl]').type('Human Line')
        cy.get('[data-cy=campaign-setup-list-size]').type('500000')
        cy.get('[data-cy=campaign-setup-baseline-open-rate]').type('30%')
        cy.get('[data-cy=campaign-setup-submit-button]').click()
                
      })

      it('New Language Generation', function(){

        cy.get('[data-cy=side-nav-language_generation]').click()
        cy.wait(3000)
        cy.get('input[name="SEND_DATE"]').click()
        cy.get('.ant-calendar-today-btn').click()
        cy.get('.select_single.required > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .ant-select').click({ multiple: true }).type('Discount off Product').type('{enter}')
        cy.get('[data-cy=text_short]').type('Jackets')
        cy.get('[data-cy=text_percentage]').type('10')
        cy.get('#campaign-step-2 > form > div:nth-child(7) > div.ant-col.ant-form-item-control-wrapper > div > span > div > div > div').click().type('Footwear').type('{enter}')
        
        cy.get('[data-cy=lng-generation-magic-button]').click()
        
       
      })
     
      
    


}
)