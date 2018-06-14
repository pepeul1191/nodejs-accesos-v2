var dataSistemaMenuView = {
  el: "body",
  containerModal: "modal-container",
  urlTemplate: STATICS_URL + "templates/sistema_menu.html",
  handlebarsTemplateId: "sistema-menu-template",
  targetMensaje: "mensajeRptaMenu",
  context: {
    titulo_modal: "Gestionar Menus del Sistema",
  },
  closeFunction: function(){
    location.replace(BASE_URL + "accesos/#/");
  },
};