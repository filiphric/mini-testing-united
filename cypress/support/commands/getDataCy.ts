declare global {
  namespace Cypress {
    interface Chainable {
      getDataCy: typeof getDataCy
    }
  }
}

export const getDataCy = function(
  input: string
) {
  
  return cy.get(`[data-cy='${input}']`);
  
};