describe("Testing of Woolworth login", () => {
    it("Woolworths login", () => {
        cy.visit("http://eaapp.somee.com/");
        cy.fixture("sv").as("sri");
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
        cy.get("@sri").then((user1) => {
            cy.get("#UserName").type(user1.Username);
            cy.get("#Password").type(user1.Password);
        })
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



