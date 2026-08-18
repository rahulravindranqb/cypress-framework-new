import ProductPage from "../pages/ProductPage";
import LoginPage from "../pages/LoginPage";

describe('SauceDemo Product Tests', () => {

    const loginPage = new LoginPage();
    const productPage = new ProductPage();

    beforeEach(() => {
        loginPage.visit();
        loginPage.login('standard_user', 'secret_sauce');
    });

    it('should display the products page', () => {
        cy.url().should('include', '/inventory.html');

    });

    it('should display products', () => {
        cy.get('.inventory_item').should('have.length.greaterThan', 0);
    });

    it('should sort products Z to A', () => {
        productPage.sortProducts('za');
    });

    it('should sort products low to high', () => {
        productPage.sortProducts('lohi');
    });

    it('should sort products high to low', () => {
        productPage.sortProducts('hilo');
    });

    it('should sort products A to Z', () => {
        productPage.sortProducts('az');
    });

    afterEach(() => {
        cy.screenshot();
    });

});