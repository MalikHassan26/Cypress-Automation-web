it('Testing The Login page' , () => {
    cy.visit('/signin' ,{timeout : 6000 })

    ////////////Login Page Testing code////////////////////////

    cy.get(':nth-child(1) > .w-full').type('tester@yopmail.com') 
    cy.get('.relative > .w-full').type('qwerta1')
    cy.get('.bg-custom-dark').click('')

    //****************Dashboard section*********************//
    
    cy.get('.mb-auto > .flex-col > :nth-child(3) > .flex').click('')
    cy.get(':nth-child(1) > a > .group > .flex-col').click('')
    
    cy.get('.px-10').click('')
});
