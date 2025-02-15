describe('Portfolio Website', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should display the header with the correct title', () => {
        cy.get('header').should('be.visible');
        cy.contains('Calvert Fitzgerald').should('be.visible');
    });

    it('should display the navigation bar with correct links', () => {
        cy.get('nav').should('be.visible');
        const sections = ['summary', 'education', 'skills', 'experience', 'projects'];
        sections.forEach((section) => {
            cy.get('nav').find(`a[href="#${section}"]`).should('exist');
        });
    });

    it('should display all main sections after scrolling', () => {
        cy.get('#summary').scrollIntoView().wait(325).should('be.visible');
        cy.get('#education').scrollIntoView().wait(325).should('be.visible');
        cy.get('#skills').scrollIntoView().wait(325).should('be.visible');
        cy.get('#experience').scrollIntoView().wait(325).should('be.visible');
        cy.get('#projects').scrollIntoView().wait(325).should('be.visible');
    });

    it('should have a working "Contact Me" button', () => {
        cy.get('a[aria-label="Contact Me"]')
            .should('have.attr', 'href')
            .and('include', 'mailto:');
    });

    it('should open the mobile menu on small screens', () => {
        cy.viewport('iphone-6');
        cy.get('nav button[aria-label="Toggle menu"]').click();
        cy.get('nav')
            .find('div[class*="md:hidden"]')
            .should('be.visible')
            .and('contain', 'Summary');

    });
});
