/// <reference types="cypress"/>

import Landing from '../pom/vistaVuValidationExamples.js';

const landingSreen = new Landing();

describe('Page Load Test', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });

  beforeEach(() => {
    cy.clearAndViewport();
    landingSreen.visitLandingPage();
  });

  it('validation examples', () => {
    //landingSreen.visitLandingPage(); // landing page load Test
    landingSreen.uiElemntsValidation(); // UI Elements Test
    landingSreen.getToLearnMore(); // Validate 2st accordion element and navigate to //sap-business-bydesign
    landingSreen.validateResponsiveTabs(); // Validate responsive tabs
    landingSreen.validateCardDescription(); // Validate card-description
    landingSreen.validateWidgitCard(); // Validate card-description expanded
    landingSreen.navigateToCompany(); // Navigate to Company section
    landingSreen.validateBbbAwards(); // Navigate to Awards section, validate url, header
    landingSreen.performSearch(); // Validate serch results
  });

  it('fill out the form', () => {
    landingSreen.openContactUstForm(); // Navigate to Contact Us Form
    landingSreen.fillOutForm(); // Navigate to Contact Us Form
    cy.setMobileUi(); // Switch to mobile UI iPhone 14 Pro Max
    landingSreen.openContactUstForm(); // Navigate to Contact Us Form
    landingSreen.fillOutForm(); // Navigate to Contact Us Form
  });
});
