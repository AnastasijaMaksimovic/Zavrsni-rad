class Professor {
    get firstNameInput() {
        return cy.get("#input-default");
    }
    get lastNameInput() {
        return cy.get("#input-default1");
    }
    get imageBtn() {
        return cy.get("button[type='button']").eq(2);
    }
    get imageInput() {
        return cy.get("input[type='text']").eq(2);
    }
    get submitBtn() {
        return cy.get("button[type='button']").eq(3);
    }
    get professorPageHeading() {
        return cy.get("h1")
    }

    newProfessor(firstName, lastName, image) {
        this.firstNameInput.type(firstName);
        this.lastNameInput.type(lastName);
        this.imageBtn.click();
        this.imageInput.type(image);
        this.submitBtn.click();

    }
}

export const professor = new Professor();
