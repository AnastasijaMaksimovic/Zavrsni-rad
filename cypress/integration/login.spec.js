/// <reference types="cypress" />

import{  authLogin  } from '../page_objects/authLogin';

describe('login test', () => {

let validEmail = "anastasija.maksimovic21@gmail.com";
let validPassword = "anjaitoni111";

    it('login with valid credentials', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://gradebook-api.vivifyideas.com/api/login'
        }).as('login');

        cy.visit('/login');
        cy.url().should('eq', 'https://gradebook.vivifyideas.com/login');
        authLogin.login(validEmail, validPassword);

        cy.wait('@login').then((interception) => {
            console.log(interception);
            expect(interception.response.statusCode).eq(200);
        });
        cy.url().should("not.contain", "/login");
    });
});
