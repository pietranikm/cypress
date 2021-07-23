/// <reference types = "cypress" />

describe('By suite', () => {


    it.only('Buy Ticket', () =>{


        cy.addToCart('/kup-bilety/sanah-warszawa-torwar-1/pazdziernik-2021', '2', '1' )

        // cy.checkPrice()

        cy.fillForm()

        cy.buyAndPay()
    })

    


})    