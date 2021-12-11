type Toys = 'Teddy Bear' | 'Train' | 'Lego' | 'Doll' | 'Car';

const addCard = (name: Toys) => {

  cy
    .getDataCy('new-card')
    .click();

  cy
    .getDataCy('new-card-input')
    .type(name + '{enter}');

}

it('start with typescript', () => {

  cy
    .visit('/board/87629301172')

    addCard('Train');

})

