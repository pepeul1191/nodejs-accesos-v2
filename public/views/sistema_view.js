var SistemaView = Backbone.View.extend({
	el: '#workspace',
	initialize: function(){
		//this.render();
		//console.log("initialize");
		this.events = this.events || {};
    this.tablaSistema =  new TableView(dataTablaSistema);
	},
	events: {
		// se está usando asignacion dinamica de eventos en el constructor
    //eventos tabla de departamentos
    "click #tablaSistema > tfoot > tr > td > button.agregar-fila": "agregarFilaSistema",
		"click #tablaSistema > tfoot > tr > td > button.guardar-tabla": "guardarTablaSistema",
		"keyup #tablaSistema > tbody > tr > td > input.text": "inputTextEscribirSistema",
		"click #tablaSistema > tbody > tr > td > i.quitar-fila": "quitarFilaSistema",
	},
	render: function() {
		this.$el.html(this.getTemplate());
	},
	getTemplate: function() {
		var data = { };
		var template_compiled = null;
		$.ajax({
		   url: STATICS_URL + 'templates/sistema.html',
		   type: "GET",
		   async: false,
		   success: function(source) {
		   	var template = Handlebars.compile(source);
		   	template_compiled = template(data);
		   }
		});
		return template_compiled;
	},
	mostrarTabla: function(){
		this.tabla.listar();
	},
  //evnetos tabla de departamentos
  inputTextEscribirSistema: function(event){
    this.tablaSistema.inputTextEscribir(event);
  },
  quitarFilaSistema: function(event){
    this.tablaSistema.quitarFila(event);
  },
  guardarTablaSistema: function(event){
    this.tablaSistema.guardarTabla(event);
  },
  agregarFilaSistema: function(event){
    this.tablaSistema.agregarFila(event);
  },
});
