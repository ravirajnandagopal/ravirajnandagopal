cy.visit(‘URL’);
cy.visit("/contact us");
it('Submit form', () => {
cy.get('.action-form')
.find('[type="Name"]').type('Name’)
.find('[type="email"]').type('email’)
.find('[type="phone no"]').type('phone no’)
.find('[type="message"]').type('message’)
cy.get('.action-form').submit()
.next().should('contain', 'Your form has been submitted!')
  });
