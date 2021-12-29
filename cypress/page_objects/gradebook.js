class Gradebook {
    get nameInput() {
        return cy.get("#name");
    }
    get professorInput() {
        return cy.get("#__BVID__198").eq.last;
    }
    get submitBtn() {
        return cy.get("button[type='button']").eq(0);
    }
    get gradebookPageHeading() {
        return cy.get("h1");
    }

    newGradebook(name) {
        this.nameInput.type(name);
        this.professorInput.click();
        this.submitBtn.click();
    }
}

export const gradebook = new Gradebook();
