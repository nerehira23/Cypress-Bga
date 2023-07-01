import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import srvUserDisable from "../../POM/SrvUserDisable.js"

Given ('El usuario ingresa a la página web de Gananet', () => {
  srvUserDisable.goTo();
});

When ('El usuario selecciono el tipo de usuario Alias', () => {
  srvUserDisable.clickUserAlias();
});

Then ('E ingreso el usuario ALIAS y hago clic en verificar', () => {
 srvUserDisable.fillInputAlias();
 srvUserDisable.clickButtonVerify();
});

Then ('Obtiene un mensaje restrictivo', () => {
  srvUserDisable.validateMsgUserDisable();
});
