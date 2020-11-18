describe("Testing of Woolworth login", () => {
    it("Woolworths login", () => {
      cy.visit("https://uatsite.woolworths.com.au/");
      cy.contains("Log in / Signup").click();
      cy.url().should('include', 'shop/securelogin');
     cy.get("#loginForm-Email").type('deliveryorder@gmail.com');
     cy.get("#loginForm-Password").type('Monday11');
     cy.get(".primary-legacy").click();
     cy.contains("My Account");
     cy.end;
      
    })

    
})
