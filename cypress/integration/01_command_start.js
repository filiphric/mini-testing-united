/// <reference types="cypress" />

it('start with typescript', () => {

  cy
    .visit('/board/87629301172')

  cy
    .getDataCy('new-card')
    .click();

  cy
    .getDataCy('new-card-input')
    .type('Board games{enter}');

})