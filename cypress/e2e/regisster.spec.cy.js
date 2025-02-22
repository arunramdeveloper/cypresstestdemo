// cypress/e2e/regisster.spec.cy.js

import RegisterPage from "../pages/registerPage"

describe("Registration Test", () => {
  const registerPage = new RegisterPage();

  beforeEach(() => {
    registerPage.visit();
  });

  it("should register a new user", () => {
    registerPage.typeFirstName("John");
    registerPage.typeLastName("Doe");
    registerPage.typeEmail(`johns2.doe${Math.floor(Math.random() * 10000)}@example.com`);
    registerPage.typeTelephone("1234567890");
    registerPage.typePassword("password123");
    registerPage.typeConfirmPassword("password123");
    registerPage.subscribeToNewsletter(true);
    registerPage.agreeToPrivacyPolicy();
    registerPage.submitRegistrationForm();

    // Assert that the registration was successful
    cy.url().should("include", "/index.php?route=account/success");
  });
});