class LoginPage {

    usernameField = '#user-name';
    passwordField = '#password';
    loginButton = '#login-button';
    errorMessage = '[data-test="error"]';

    visit() {
        cy.visit('/');
    }

    login(username, password) {
        cy.get(this.usernameField).type(username);
        cy.get(this.passwordField).type(password);
        cy.get(this.loginButton).click();
    }

    getErrorMessage() {
        return cy.get(this.errorMessage);
    }
}

export default LoginPage;