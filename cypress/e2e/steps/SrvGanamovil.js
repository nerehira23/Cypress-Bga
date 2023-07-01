import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import srvGanamovil from "../../POM/SrvGanamovil.js"

Given ('El usuario ingresa al portal web www.bg.com.bo', () => {
  srvGanamovil.goTo();
});

When ('Ingresa al menú SERVICIOS, GanaMóvil, Funcionalidades', () => {
  srvGanamovil.clickOnTargetGanamovil();
  srvGanamovil.clickOnMenuFuncionalidades();
});

Then ('Obtiene listado donde se encuentra las funcionalidades', () => {
  srvGanamovil.clickDynamicMenuFuncionalidades();
});
