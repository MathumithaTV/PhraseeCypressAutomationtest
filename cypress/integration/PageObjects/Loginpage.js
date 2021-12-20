///<reference types ="cypress"/>

class LoginPage
{

    visit()
    {
        cy.visit("https://app-qa.phrasee.co/campaign")
    }

    fillEmail(value)
    {
       const emailField = cy.get('input[name=email]')
       emailField.clear()
       emailField.type(value)
       return this
       

    }

    fillPassword(value)
    {
       const passwordField = cy.get('input[name=password]')
       passwordField.clear()
       passwordField.type(value)
       return this
    
    }

    Login(value)
    {
      const button = cy.get('#phrasee > div > div.login_box > form > div.submit > button')
      button.click()
    }

}

export default LoginPage
