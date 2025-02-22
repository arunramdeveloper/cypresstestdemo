// cypress/pages/RegisterPage.js

class RegisterPage {
    elements = {
      firstNameInput: () => cy.get("#input-firstname"),
      lastNameInput: () => cy.get("#input-lastname"),
      emailInput: () => cy.get("#input-email"),
      telephoneInput: () => cy.get("#input-telephone"),
      passwordInput: () => cy.get("#input-password"),
      confirmPasswordInput: () => cy.get("#input-confirm"),
      subscribeYesRadio: () => cy.get('input[type="radio"][name="newsletter"][value="1"]'),
      subscribeNoRadio: () => cy.get('input[type="radio"][name="newsletter"][value="0"]'),
      privacyPolicyCheckbox: () => cy.get('input[type="checkbox"][name="agree"]'),
      continueButton: () => cy.get('input[type="submit"][value="Continue"]'),
    };
  
    visit() {
      cy.visit("/?route=account/register");
    }
  
    typeFirstName(firstName) {
      this.elements.firstNameInput().type(firstName);
    }
  
    typeLastName(lastName) {
      this.elements.lastNameInput().type(lastName);
    }
  
    typeEmail(email) {
      this.elements.emailInput().type(email);
    }
  
    typeTelephone(telephone) {
      this.elements.telephoneInput().type(telephone);
    }
  
    typePassword(password) {
      this.elements.passwordInput().type(password);
    }
  
    typeConfirmPassword(confirmPassword) {
      this.elements.confirmPasswordInput().type(confirmPassword);
    }
  
    subscribeToNewsletter(subscribe) {
      if (subscribe) {
        this.elements.subscribeYesRadio().click();
      } else {
        this.elements.subscribeNoRadio().click();
      }
    }
  
    agreeToPrivacyPolicy() {
      this.elements.privacyPolicyCheckbox().click();
    }
  
    submitRegistrationForm() {
      this.elements.continueButton().click();
    }
  }
  
  export default RegisterPage;