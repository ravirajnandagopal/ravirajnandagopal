function loginUsingForm(username: string, password: string) 
{
  		cy.visit('URL’);
cy.visit("/signin");
  		cy.get("[data-cy=signin-button]").click();
  		cy.get("[data-cy=signin-email-form]").should("be.visible");
  		cy.get("input[name=username]").type(username);
cy.get("input[name=password]").type(password).type("{enter}"); 
cy.location("pathname").should("include", "/profile");
  		cy.get("[data-cy=navbar-menu-avatar]").should("be.visible"); }
