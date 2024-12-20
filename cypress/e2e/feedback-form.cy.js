describe('Feedback form functionality', () => {
          
    it('Should successfully submit the form with valid data', () => {
      // Open the feedback form page
      cy.visit('https://kontaktnaya-forma.testograf.ru/')

      // Fill in all required fields with valid data
      cy.get('.shortText').eq(0).type('Иван');
      cy.get('.shortText').eq(1).type('ivan@gmail.com') 
      cy.get('.shortText').eq(2).type('+79878569878')
      cy.get('#downshift-0-toggle-button').click()
      cy.contains('Заказ').click()
      cy.get('textarea').type('Hello world!')
      
      // Click the submit button
      cy.get('button').eq(0).click();

      // Verify that a success message appears
      cy.contains('Благодарим за обращение!').should('be.visible')
    })  
  })