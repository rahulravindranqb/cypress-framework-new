import LoginPage from '../pages/LoginPage';

describe('SauceDemo Login Tests', () => {

    let usersData;
    let loginPage

    before(() => {

        cy.fixture('users').then((data) => {
            usersData = data;
        });

    });

    beforeEach(() => {
        loginPage = new LoginPage();
        loginPage.visit();

    });
    afterEach(function () {
        cy.screenshot();
    });

    it('Login with standard user', () => {

        loginPage.login(
            usersData.users[0].username,
            usersData.password
        );

        cy.url().should('include', 'inventory.html');

    });

    it('Login with locked user', () => {

        loginPage.login(
            usersData.users[1].username,
            usersData.password
        );

        loginPage.getErrorMessage()
            .should('be.visible');

    });

    it('Login with problem user', () => {
        loginPage.login(usersData.users[2].username, usersData.password);
        cy.url().should('include', 'inventory.html');

    });



});