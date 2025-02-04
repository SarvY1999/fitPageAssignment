export default class RegistrationPage{
    locators = {
        eventLbl : "h1.font-normal",
        category : "div.pt-10.pb-20 div.mx-auto div.flex-row",
        categorySelectedLbl : "div.sticky.bottom-0 > p",
        subtotalLbl : "div.sticky.bottom-0 span.ml-2",
        proceedBtn : "div.text-white.bg-primaryPink-500",
        attendeeDetailLbl: "p.text-2xl.font-semibold",
        contactNoTxtBox: "div.flex.flex-col.gap-y-4:nth-child(2) input",
        confirmBtn: "div.bg-primaryPink-500",
        otpDialog : "div.sticky.flex"
    }

    verifyLabel(lblText){
        cy.log(`Verify the Label of selected event is ${lblText}`);
        cy.get(this.locators.eventLbl).should('have.text', lblText);
    }

    addCategory(categoryName) {
        cy.log(`Add Category ${categoryName}`);
        cy.contains("p", categoryName)
          .parents("div.flex.flex-row") 
          .find("p")                    
          .contains("+ Add")            
          .click();                      
    }                                      
    
    verifycategorySelectedLbl(lblText){
        cy.log(`Verifying category label is equal to ${lblText}`);
        cy.get(this.locators.categorySelectedLbl).should('have.text', lblText);
    }


    verifySubTotal(subtotal){
        cy.log(`Verifying subtotal is equal to Rs. ${subtotal}`);
        cy.get(this.locators.subtotalLbl)
            .scrollIntoView()
            .invoke("text")
            .then((text)=> {
            expect(text.trim()).to.be.eq(`Rs. ${subtotal}`)
        });
    }

    ProceedBtnClick(){
        cy.log(`Click on Proceed Btn}`);
        cy.get(this.locators.proceedBtn).click();
    }

    verifyAttendeeLabel(lblText){
        cy.log(`Verify if the Label of atendee details is ${lblText}`);
        cy.get(this.locators.attendeeDetailLbl).should('have.text', lblText);
    }

    addContactNo(contNo){
        cy.log(`Enter contact no`);
        cy.get(this.locators.contactNoTxtBox).type(contNo);
    }

    confirmBtnClick(){
        cy.log(`Click on Proceed Btn}`);
        cy.get(this.locators.proceedBtn).click();
        cy.get(this.locators.otpDialog).should("be.visible");
    }

}