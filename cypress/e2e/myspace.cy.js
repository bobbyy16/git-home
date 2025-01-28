describe("Myspace Component", () => {
  beforeEach(() => {
    cy.visit("/myspace");
  });

  it("should render the user detail card", () => {
    cy.get(".user_detail_card").should("exist");
    cy.get(".user_detail_card img").should("exist");
    cy.get(".user_detail_card h3").should("exist");

    it("should render the Githome_nav and Githome_nav_details components", () => {
      cy.get(".githome_nav_details_container").should("exist");
      cy.get(".githome_details_nav").should("exist");
      cy.get(".details").should("exist");
    });
  });
});
