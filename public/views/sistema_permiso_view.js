var SistemaPermisoView = ModalView.extend({
  initialize: function(options){
    this.targetMensaje = options["targetMensaje"];
    // herencia de atributos, móetodos y eventos
    ModalView.prototype.initialize.apply(this, [options])
    this.inheritEvents(ModalView);
    // delegación de eventos
    this.delegateEvents();
    this.tablaPermiso = new TableView(dataTablaPermiso);
  },
  events: {
    // se está usando asignacion dinamica de eventos en el constructor
    // tabla permisos
    "click #tablaPermiso > tfoot > tr > td > button.agregar-fila": "agregarFilaPermiso",
    "click #tablaPermiso > tfoot > tr > td > button.guardar-tabla": "guardarTablaPermiso",
    "keyup #tablaPermiso > tbody > tr > td > input.text": "inputTextEscribirPermiso",
    "click #tablaPermiso > tbody > tr > td > i.quitar-fila": "quitarFilaPermiso",
  },
    //eventos tabla de permisos
    inputTextEscribirPermiso: function(event){
      this.tablaPermiso.inputTextEscribir(event);
    },
    quitarFilaPermiso: function(event){
      this.tablaPermiso.quitarFila(event);
    },
    guardarTablaPermiso: function(event){
      this.tablaPermiso.extraData = {sistema_id: this.sistemaId};
      this.tablaPermiso.guardarTabla(event);
    },
    agregarFilaPermiso: function(event){
      this.tablaPermiso.agregarFila(event);
    },
});