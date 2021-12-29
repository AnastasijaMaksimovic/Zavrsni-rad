import{  authLogin  } from '../page_objects/authLogin';
import{  header  } from '../page_objects/header';
import{  professor  } from '../page_objects/professor';

const faker = require("faker");

describe('add profesor test', () => {

let validEmail = "anastasija.maksimovic21@gmail.com";
let validPassword = "anjaitoni111";

let professorData = {
    randomFirstName: faker.name.firstName(),
    randomLastName: faker.name.lastName(),
    randomImage: faker.image.city() + '.jpg'
}
    
    before('login', () => {
        cy.visit('/login');
        cy.url().should('eq', 'https://gradebook.vivifyideas.com/login');

        authLogin.login(validEmail, validPassword);

        cy.url().should("not.contain", "/login");
    });

    it('create new professor',() => {
        cy.intercept({
            method: 'POST',
            url: 'https://gradebook-api.vivifyideas.com/api/professors/create'
        }).as('newProfessor');

        header.addProfessorBtn.click();
        professor.professorPageHeading.should('be.visible');
        professor.professorPageHeading.should('have.text', 'Create new professor.');
        professor.professorPageHeading.should('have.css', 'color', 'rgb(44, 62, 80)');
        professor.professorPageHeading.should('have.css', 'text-align', 'center');
        cy.url().should('eq', 'https://gradebook.vivifyideas.com/professors/create');
        professor.newProfessor(professorData.randomFirstName, professorData.randomLastName, professorData.randomImage);

        cy.wait('@newProfessor').then((interception) => {
            console.log(interception);
            expect(interception.response.statusCode).eq(200);
        });
    });
});
