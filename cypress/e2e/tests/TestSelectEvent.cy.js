/// <reference types="cypress" />
import { HomePage, RegistrationPage } from "../PageObjects"

describe("Test Select an event and payment", ()=> {
  const hp = new HomePage();
  
  it("Test Select an event and payment", ()=> {

    // Search for event
    hp.searchEvent("Sakal Nagpur 10K Run");

    // Select the Event
    hp.selectEvent("Sakal Nagpur 10K Run");

    cy.origin(Cypress.env("registrationUrl"), ()=> {

      const { RegistrationPage } = Cypress.require("../PageObjects/index");
      const rp = new RegistrationPage();

      // Verify the Label of selected event
      rp.verifyLabel("SAKAL NAGPUR 10K RUN");

      // Click Add btn on Category
      rp.addCategory("10KM Timed Run");

      // Verify Category is selected or not
      rp.verifycategorySelectedLbl("1 category selected");

      // Verify subtotal of selected Category
      rp.verifySubTotal("600");

      // Click on Prcoeed btn
      rp.ProceedBtnClick();

      // verify attendee label 
      rp.verifyAttendeeLabel("10KM Timed Run - Attendee 1 Details");

      // enter contact details
      rp.addContactNo("1234567890");

      //Click Confirm button
      rp.confirmBtnClick();


      

    })

  })
})