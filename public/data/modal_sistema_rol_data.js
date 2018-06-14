var dataSistemaRolView = {
  el: "body",
  containerModal: "modal-container",
  urlTemplate: STATICS_URL + "templates/sistema_rol.html",
  handlebarsTemplateId: "sistema-rol-template",
  targetMensaje: "mensajeRptaRol",
  context: {
    titulo_modal: "Editar Roles del Sistema",
  },
  closeFunction: function(){
    location.replace(BASE_URL + "accesos/#/");
  },
};