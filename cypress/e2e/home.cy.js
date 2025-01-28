describe("Home Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the input field and button", () => {
    cy.get('input[type="text"]').should("exist");
    cy.contains("button", "Generate Profile").should("exist");
  });

  it("should update the username state on input change", () => {
    const testUsername = "testuser";
    cy.get('input[type="text"]').type(testUsername);
    cy.get('input[type="text"]').should("have.value", testUsername);

    it("should fetch data and navigate to /myspace on button click", () => {
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
      cy.url().should("include", "/myspace");
    });
  });
});
