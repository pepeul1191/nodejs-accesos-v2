var SistemaRolView = ModalView.extend({
  initialize: function(options){
    this.targetMensaje = options["targetMensaje"];
    // herencia de atributos, móetodos y eventos
    ModalView.prototype.initialize.apply(this, [options])
    this.inheritEvents(ModalView);
    // delegación de eventos
    this.delegateEvents();
    this.tablaRol = new TableView(dataTablaRol);
    this.tablaRolPermiso = new TableView(dataTablaRolPermiso);
  },
  events: {
    // se está usando asignacion dinamica de eventos en el constructor
    // tabla roles
    "click #tablaRol > tfoot > tr > td > button.agregar-fila": "agregarFilaRol",
		"click #tablaRol > tfoot > tr > td > button.guardar-tabla": "guardarTablaRol",
		"keyup #tablaRol > tbody > tr > td > input.text": "inputTextEscribirRol",
    "click #tablaRol > tbody > tr > td > i.quitar-fila": "quitarFilaRol",
    "click #tablaRol > tbody > tr > td > i.ver-permisos": "verPermisos",
    // tabla permisos
    "change #tablaRolPermiso > tbody > tr > td > .input-check": "clickCheckBoxRolPermiso",
    "click #tablaRolPermiso > tfoot > tr > td > button.guardar-tabla": "guardarTablaRolPermiso",
  },
  //eventos tabla de roles
  inputTextEscribirRol: function(event){
    this.tablaRol.inputTextEscribir(event);
  },
  quitarFilaRol: function(event){
    this.tablaRol.quitarFila(event);
  },
  guardarTablaRol: function(event){
    this.tablaRol.extraData = {sistema_id: this.sistemaId};
    this.tablaRol.guardarTabla(event);
  },
  agregarFilaRol: function(event){
    this.tablaRol.agregarFila(event);
  },
  verPermisos: function(event){
    var rolId = event.target.parentElement.parentElement.firstChild.innerHTML;
    this.tablaRolPermiso.urlListar = 
      limpiarURL(BASE_URL + "rol/permiso/listar/" , this.tablaRolPermiso.sistemaId + "/" + rolId);
    this.tablaRolPermiso.rolId = rolId;
    this.tablaRolPermiso.limpiarBody();
    this.tablaRolPermiso.listar();
    $("#formTableRolPermiso").removeClass("oculto");
  },
  //eventos tabla de permisos
  clickCheckBoxRolPermiso: function(event){
    this.tablaRolPermiso.clickCheckBox(event);
  },
  guardarTablaRolPermiso: function(evnet){
    this.tablaRolPermiso.extraData = {
      sistema_id: this.sistemaId,
      rol_id: this.tablaRolPermiso.rolId,
    };
    this.tablaRolPermiso.guardarTabla(event);
  },
});