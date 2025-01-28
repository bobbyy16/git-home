describe("Navbar Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the app title", () => {
    cy.get(".nav_title h1").should("contain", "GitHome");
  });

  it("should conditionally render the logout button", () => {
    cy.get(".nav_title h3").should("not.exist");

    cy.intercept("GET", "https://api.github.com/users/testuser", {
      fixture: "userData.json",
    }).as("getUserData");
    cy.intercept("GET", "https://api.github.com/users/testuser/followers*", {
      fixture: "followers.json",
    }).as("getFollowers");
    cy.intercept("GET", "https://api.github.com/users/testuser/following*", {
      fixture: "following.json",
    }).as("getFollowing");

    cy.get('input[type="text"]').type("testuser");
    cy.contains("button", "Generate Profile").click();

    cy.wait(["@getUserData", "@getFollowers", "@getFollowing"]);

    cy.get(".nav_title h3").should("exist");
  });
});
