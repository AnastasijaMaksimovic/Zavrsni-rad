class AuthLogin {
    get emailInput() {
        return cy.get("#email");
    }
    get passwordInput() {
        return cy.get("#userPassword");
    }
    get submitBtn() {
        return cy.get("button[type='submit']");
    }

    login(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.submitBtn.click();
    }
}

export const authLogin = new AuthLogin();
