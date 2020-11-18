describe("Testing of Woolworth login", () => {
    it("Woolworths login", () => {
        cy.visit("/");
        cy.fixture("sv").as("sri");
        cy.get("#loginLink").click();
        cy.url().should('include', 'http://eaapp.somee.com/Account/Login');
        cy.get("@sri").then((user1) => {
            cy.login(user1.Username, user1.Password);
        })

        cy.url().should('include', 'http://eaapp.somee.com/')
    })
})