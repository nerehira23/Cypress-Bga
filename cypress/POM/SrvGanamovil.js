require('cypress-xpath');

class SrvGanamovilPage{

    constructor(){
        this.targetGanamovil = ':nth-child(1) > .bg-white > a > .p-6';
        this.menuFuncionalidades = '.container > .flex-wrap > .relative > .flex > .false';
        this.listOptions = ['Intructivo de uso GanaMóvil', 
                            'Habilitación de GanaMóvil',
                            'Apertura de Cuenta', 
                            'Apertura de segunda Cuenta',
                            'Modificación monto Transaccional',
                            'Pagos QR',
                            'Cobros QR',
                            'Cobro de giros',
                            'Envío de giros',
                            'Activación de seguro para Tarjeta',
                            'Renovación de Tarjeta de Débito',
                            'Solicitud de Tarjeta de Débito',
                            'Pago de Servicios']
    }

    async goTo(){
        await cy.visit(Cypress.env('url'))   
    }

    async clickOnTargetGanamovil(){
        await cy.get(this.targetGanamovil).click();
    }

    async clickOnMenuFuncionalidades(){
        await cy.get(this.menuFuncionalidades).click();
    }

    async clickDynamicMenuFuncionalidades(listOpt = this.listOptions){
        const randomNumber = Math.floor(Math.random() * listOpt.length) + 0;
        await cy.xpath('//a[@target="_blank"][contains(.,"'+listOpt[randomNumber]+'")]').click();
    }

}
module.exports = new SrvGanamovilPage();