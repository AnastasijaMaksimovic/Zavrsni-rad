class Header {
    get addProfessorBtn() {
        return cy.get("a[href='/professors/create']");
    }
    get addGradebookBtn() {
        return cy.get("a[href='/gradebook/create']");
    }
}

export const header = new Header();
