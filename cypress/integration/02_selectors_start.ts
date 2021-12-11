it('use typescript with selectors', () => {

  cy
    .visit('/board/87629301172')

  cy
    .getDataCy('create-card')
    .click();

  cy
    .getDataCy('create-card-input')
    .type('Board games{enter}');

})