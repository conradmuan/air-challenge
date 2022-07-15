describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("results get filtered", () => {
    cy.get("[data-search]").type("aaren damato");
    cy.get("[data-results-container]")
      .find("[data-result]")
      .should("have.length", 1);
  });

  it("can be scrolled", () => {
    cy.get("[data-results-container]").scrollTo(0, 500, {
      ensureScrollable: false,
    });
  });

  it("shows no results", () => {
    cy.get("[data-search]").type("no results");
    cy.get("[data-results-container]")
      .find("[data-result]")
      .should("have.length", 0);
  });
});

export {};
