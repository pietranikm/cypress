

Cypress.Commands.add('addToCart', (Url, position, number) =>{


    // number indicates kind of a ticket by it's position in a ticket pool list, first is 0

    cy.visit(Url)

    cy.contains("Wybierz rodzaj i liczbę").parents('div')
    .find('li', '[data-test-id]').eq(position).then( ticketPool => {

        for(let n= 0; n<= number-1; n++){
        cy.get(ticketPool).contains('+').click()
        }

        if(number > 4){
            cy.get(ticketPool).find('.Buttons_amount__3di17').should('contain', '4')
        }

        else{
        cy.get(ticketPool).find('.Buttons_amount__3di17').should('contain', number)
        }

        cy.contains('Przejdź do płatności')
        .click()

    })
    })
    

Cypress.Commands.add('fillForm',() =>{

        cy.get('[data-test-id="client-data-email"]').type('test@test.com')
        .should('have.value', 'test@test.com')

        cy.get('[data-test-id="client-data-firstname"]').type('testImię')
        .should('have.value', 'testImię')

        cy.get('[data-test-id="client-data-lastname"]').type('TestNazwisko')
        .should('have.value', 'TestNazwisko')
        
        cy.get('[data-test-id="agreements-checkbox"]').
        find('.checkbox-selector').click({multiple: true})

        cy.get('[data-test-id="agreements-checkbox"]').find('input').should('have.value', 'true')

    })

    Cypress.Commands.add('buyAndPay',() =>{


        
    cy.get('[data-test-id="form-layout-buyAndPay"]').click()

    // Next finds if redirects to PayNow. Needs to have "chromeWebSecurity": false in cypress.json
    // works only on chromium browsers

    // cy.contains('Wybierz płatność')
  



    })


