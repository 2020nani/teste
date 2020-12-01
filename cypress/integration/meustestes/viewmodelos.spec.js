describe ('Mostrar modelos apos escolher a marca e ocultar para escolher marca novamente', () => {
    it('Modelos ativos', () => {
        cy.visit('http://localhost:3000');
        cy.get('tr:nth-child(2) button').click();
        cy.contains('.sc-hKgILt > h1', 'Modelos')
        .should('be.visible')

    })
    it('Modelos inativos ao clicar botao escolher marcas', () => {
        cy.visit('http://localhost:3000/');
        cy.get('tr:nth-child(2) button').click();
        cy.get('button').click();
        cy.contains('tr:nth-child(2) button ', 'Ver modelos')
        .should('be.visible')
    })
})