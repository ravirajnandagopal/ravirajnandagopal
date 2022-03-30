
cy.visit(‘URL’);
cy.visit("/language");
cy.get("[data-cy=language-button]").click();
cy.get("[data-cy=english-button]").click();
cy.get("[data-cy=cars]").should("be.visible"); 

