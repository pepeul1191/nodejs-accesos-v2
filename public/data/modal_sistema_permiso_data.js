var dataSistemaPermisoView = {
  el: "body",
  containerModal: "modal-container",
  urlTemplate: STATICS_URL + "templates/sistema_permiso.html",
  handlebarsTemplateId: "sistema-permiso-template",
  targetMensaje: "mensajeRptaPermiso",
  context: {
    titulo_modal: "Editar Permisos del Sistema",
  },
  closeFunction: function(){
    location.replace(BASE_URL + "accesos/#/");
  },
};