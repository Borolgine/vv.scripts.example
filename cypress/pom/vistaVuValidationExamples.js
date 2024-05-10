class Landing {
  elements = {
    header: () => cy.get('.header__bottom'),
    vistaVuLogo: () => cy.get('.header__logo'),
    accordionGroupSecondElement: () =>
      cy.get(':nth-child(2) > .accordion_group > .accordion_header'),
    accordionChild2Content: () =>
      cy.get(':nth-child(2) > .accordion_group > .accordion_content'),
    learnMore: () => cy.get('[style="font-size: 18px;"] > strong > span > a'),
    sapHeader: () => cy.get('.content-wrapper > .heading'),
    botomSpacer: () => cy.get('.sr-spacer-bottom-50 > .heading'),
    widgetcard: () => cy.get('.heading').contains('Continuous Growth'),
    widgetcardDescription: () =>
      cy.get('.card-description').contains(this.text.widgetcardDescriptionText),
    responsiveTab1: () => cy.get('.nav > .active'),
    responsiveTab2: () => cy.get('.nav > :nth-child(2) > .nav-link'),
    responsiveTab3: () => cy.get('.nav > :nth-child(3)'),
    company_hr: () =>
      cy
        .get(
          ':nth-child(2) > [style="text-decoration: underline;"] > :nth-child(1) > :nth-child(1)'
        )
        .contains('Company'),
    bbbAwards: () =>
      cy
        .get(':nth-child(1) > a > strong')
        .contains('BBB Torch Award for Ethics'),
    awardsHeader: () => cy.get('.mb-5'),
    searsh: () =>
      cy.get(
        ':nth-child(2) > .hs-search-field > .hs-search-field__bar > form > .hs-search-field__input'
      ),
    searchResult: () => cy.get(':nth-child(1) > .hs-search-results__title'),
    authorSection: () => cy.get('.author-section'),
    connectButton: () =>
      cy.get('.header__button-col > .cta-group > .btn-wrapper > .cta-button'),
    generalInquiry: () =>
      cy.get('#request_type-ed4bcc06-286a-4b8e-8b2b-e1a18f90b44d_966'),

    firstNameInput: () =>
      cy.get('#firstname-ed4bcc06-286a-4b8e-8b2b-e1a18f90b44d_966'),
  };

  urls = {
    mainUrl: 'https://www.vistavusolutions.com/',
    secondLearnMore: '/sap-business-bydesign',
    awards: 'https://www.vistavusolutions.com/blog/tag/awards',
  };

  text = {
    accordionChild2Header: 'SAP Business ByDesign',
    accordionChild2Content:
      'Keep your company growing by unifying & improving your core business functions with our SAP Business ByDesign cloud or hybrid ERP software solutions.',
    sapHeaderText: 'SAP Business ByDesign Partner',
    botomSpacerText: 'Take The Complexity Out of Technology Adoption',
    widgetcardDescriptionText:
      'We work with you as a technology partner for long term growth:',
    horizontalTab1: 'Scale & Customize',
    horizontalTab2:
      'Unify All Core Functions with an End-To-End Business Suite',
    horizontalTab3: 'More Partner Value',
    awardsHeader: 'Articles about awards',
    searchResultText: 'VistaVu Solutions Ranks #3133 on the ',
    authorSectionText: 'August 17, 2021',
  };

  form = {
    firstName: 'Regular',
    lastName: 'User',
    companyName: 'Testing Run',
    phoneNumber: '1234567890',
    workEmail: 'regular.user@ahieh.com',
    hearAbout: 'testing run',
    message: "it's a testing request, please delete it",
  };

  attributes = {
    accordionHeaderBackgroundColour: 'rgb(27, 54, 93)',
  };

  visitLandingPage() {
    cy.visit(this.urls.mainUrl);
    cy.url().should('be.eql', this.urls.mainUrl);
  }

  uiElemntsValidation() {
    this.elements.header().should('be.visible');
    this.elements.vistaVuLogo().should('be.visible');
  }

  getToLearnMore() {
    this.elements
      .accordionGroupSecondElement()
      .should('be.visible')
      .and('contain', this.text.accordionChild2Header)
      .invoke('css', 'background-color')
      .and('eq', this.attributes.accordionHeaderBackgroundColour);
    this.elements.accordionGroupSecondElement().dblclick({ force: true });
    this.elements
      .accordionChild2Content()

      .should('contain', this.text.accordionChild2Content)
      .scrollIntoView();

    this.elements
      .learnMore()
      .invoke('removeAttr', 'target')
      .click({ force: true });

    cy.url().should('contain', this.urls.secondLearnMore);
    this.elements.sapHeader().should('contain', this.text.sapHeaderText);
  }

  validateCardDescription() {
    this.elements
      .botomSpacer()
      .scrollIntoView()
      .should('be.visible')
      .and('contain', this.text.botomSpacerText);
  }

  validateWidgitCard() {
    this.elements.widgetcard().click({ force: true });
    this.elements.widgetcardDescription().should('be.visible');
    cy.wait(1000);
  }

  validateResponsiveTabs() {
    this.elements
      .responsiveTab1()
      .scrollIntoView()
      .should('be.visible')
      .and('contain', this.text.horizontalTab1);
    this.elements
      .responsiveTab2()
      .should('be.visible')
      .and('contain', this.text.horizontalTab2)
      .click({ force: true });
    this.elements
      .responsiveTab3()
      .should('be.visible')
      .and('contain', this.text.horizontalTab3)
      .click({ force: true });
    cy.wait(1000);
  }

  navigateToCompany() {
    this.elements
      .company_hr()
      .scrollIntoView()
      .should('be.visible')
      .wait(1000)
      .click({ force: true });
  }

  validateBbbAwards() {
    this.elements
      .bbbAwards()
      .scrollIntoView()
      .should('be.visible')
      .wait(1000)
      .click({ force: true });
    cy.url().should('contain', this.urls.awards);
    this.elements
      .awardsHeader()
      .should('be.visible')
      .and('contain', this.text.awardsHeader);
  }

  performSearch() {
    this.elements.searsh().should('be.visible').type('2021').type('{enter}');
    this.elements
      .searchResult()
      .should('be.visible')
      .should('contain', this.text.searchResultText)
      .and('have.attr', 'href');
    this.elements.searchResult().click({ force: true });
    this.elements
      .authorSection()
      .scrollIntoView()
      .should('be.visible')
      .and('contain', this.text.authorSectionText);
    cy.wait(1000);
  }

  openContactUstForm() {
    this.elements
      .connectButton()
      .should('be.visible')
      .invoke('removeAttr', 'target')
      .click({ force: true });
  }

  fillOutForm() {
    cy.get('select[name="request_type"]')
      .contains('option', 'General Inquiry')
      .then((option) => {
        cy.get('select[name="request_type"]')
          .invoke('val', option.val())
          .trigger('change');
      });
    cy.get('[name="firstname"]').type(this.form.firstName);
    cy.get('[name="lastname"]').type(this.form.lastName);
    cy.get('[name="company"]').type(this.form.companyName);
    cy.get('[name="phone"]').type(this.form.phoneNumber);
    cy.get('[name="email"]').type(this.form.workEmail);
    cy.get('[name="how_did_you_hear_about_vistavu_"]').type(
      this.form.hearAbout
    );
    cy.get('[name="message"]').type(this.form.message);
  }
}

export default Landing;
