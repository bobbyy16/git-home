describe("Githome_nav Component", () => {
  beforeEach(() => {
    cy.visit("/myspace");
  });

  it("should display the correct counts for followers, following, idontfollow, and notFollowing", () => {
    cy.get(".githome_details_property_sizes").eq(0).should("contain", "0");
    cy.get(".githome_details_property_sizes").eq(1).should("contain", "0");
    cy.get(".githome_details_property_sizes").eq(2).should("contain", "0");
    cy.get(".githome_details_property_sizes").eq(3).should("contain", "0");
  });
});
