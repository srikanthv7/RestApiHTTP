//const { before } = require("lodash");

describe("Testing of Woolworth login", () => {
    //    before("Testing of Woolworthfsdfsfs login", () => {



    it("Woolworths login", () => {
        cy.visit("https://www.woolworths.com.au/");



        //*with the timer{{{{{EXPLICIT WAIT}}}}}
        cy.get("[aria-label='Go to slide 2']", { timeout: 60000 }).should('have.class', 'swiper-pagination-bullet');

        //*without the timer{{{{{EXPLICIT WAIT}}}}}

        cy.get("[aria-label='Go to slide 2']").should('have.class', 'swiper-pagination-bullet');

        //IMPLICIT WAIT//

        cy.get("[aria-label='Go to slide 2']", { timeout: 60000 }).should(($x) => {
            expect($x).to.have.class("swiper-pagination-bullet");

        })
    })



    //   })

    it("Woolworths login", () => {
        cy.visit("http://eaapp.somee.com/");
        //***long way of using the promise */
        //   cy.get("#loginLink").then(($logintext) => {
        //       return $logintext.text()
        //   }).as("logintext");

        //   cy.get("@logintext").then(($x)=> {
        //       expect($x).is.eql('Login');
        //   })

        //***short way of using the promise */
        cy.get("#loginLink").invoke('text').as("LoginText")
        cy.get("@LoginText").then(($x) => {
            expect($x).is.eql('Login');
        })


        cy.get("#loginLink").click();
        cy.url().should('include', 'http://eaapp.somee.com/Account/Login');
        cy.get("#UserName").type('admin');
        cy.get("#Password").type('password');
        cy.get(".btn").click();
        cy.url().should('include', 'http://eaapp.somee.com/')
        cy.contains('Employee List').click();
        cy.url().should('include', 'http://eaapp.somee.com/Employee');
        //**navigation to all rows */
        // cy.get('table').find('tr').as("rows");
        // cy.get("@rows").then(($row) => {
        //     cy.wrap($row).click({ multiple: true });
        //*verifying the property value from json//

        cy.wrap({ name: 'John' }).should('have.property', 'name').and('eq', 'John');


        //  cy.get('table').find('tr').contains('john').parent().contains('Benefits').click();

        //**Using wrap */

        cy.get('.table').find('tr > td').then(($td) => {
            cy.wrap($td).contains("John").invoke("wrap").parent().contains("Benifits").click();
        })



    })



})


