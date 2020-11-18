Cypress.Commands.add('login', (uname, pw) => {
    cy.contains("Login").click();
    cy.url().should('include', 'http://eaapp.somee.com/Account/Login');
    cy.get("#UserName").type(uname);
    cy.get("#Password").type(pw);
    cy.get(".btn").click();
})