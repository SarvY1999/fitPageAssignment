export default class HomePage {

    locators = {
        searchBox : "#modal input"
    }



    // page commands
    searchEvent(eventName){
        cy.log(`Search event ${eventName}`);
        cy.get(this.locators.searchBox)
        .click()
        .type(eventName);
        cy.get('img[alt="search-icon"]').click();
    }

    selectEvent(eventName){
        cy.log(`Select event ${eventName}`);
        cy.get("a").invoke("removeAttr", "target");
        cy.get('div.line-clamp-2')
        .contains(eventName)
        .click();
    }

}