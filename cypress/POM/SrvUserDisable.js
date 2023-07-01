require('cypress-xpath');
require('cypress-iframe');

class SrvUserDisablePage{

    constructor() {
        this.iframe = '#iframe_Browser'
        this.selectTypeUser = 'form > control-combobox > div > select'
        this.typeUserAlias = 'Alias'
        this.inputAlias = 'form > control-input-text > div > div > input'
        this.btnVerify = 'form > div.form-group.mb-0 > div > button'
        this.msgUserDisable = '#swal2-content'
    }

    async goTo(){
        await cy.visit(Cypress.env('url2'))
    }

    async clickUserAlias(){
        cy.frameLoaded(this.iframe, { timeout: 10000 }).should('be.visible');
        await cy.iframe(this.iframe)
                .find(this.selectTypeUser)
                .should('be.visible')
                .select(this.typeUserAlias, { force: true }) 
    }

    async fillInputAlias(alias = "Automation"){
        cy.frameLoaded(this.iframe, { timeout: 10000 }).should('be.visible');
        await cy.iframe(this.iframe)
                .find(this.inputAlias)
                .should('be.visible')
                .type(alias, { force: true })  
    }

    async clickButtonVerify(){
        cy.frameLoaded(this.iframe, { timeout: 10000 }).should('be.visible');
        await cy.iframe(this.iframe)
                .find(this.btnVerify)
                .should('be.visible')
                .click({ force: true });  
    }

    async validateMsgUserDisable(){
        cy.frameLoaded(this.iframe, { timeout: 10000 }).should('be.visible');
        await cy.iframe(this.iframe)
                .find(this.msgUserDisable)
                .should('exist');
    }

}
module.exports = new SrvUserDisablePage();