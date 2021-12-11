it('use typescript with selectors', () => {

  cy
    .visit('/board/87629301172')

  cy
    .getDataCy('new-card')
    .click();

  cy
    .getDataCy('new-card-input')
    .type('Board games{enter}');

})