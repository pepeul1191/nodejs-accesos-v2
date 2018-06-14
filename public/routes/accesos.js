function limpiarURL(url_original, parametro){
  return url_original + parametro;
}

var accesosRouter = Backbone.Router.extend({
  sistemaView: null,
  sistemaMenuView: null,
  sistemaPermisoView: null,
  sistemaRolView: null,
  initialize: function() {
  },
  routes: {
    "": "index",
    "sistema" : "sistemaIndex",
    "sistema/menu/:sistema_id" : "sistemaMenu",
    "sistema/permiso/:sistema_id" : "sistemaPermiso",
    "sistema/rol/:sistema_id" : "sistemaRol",
    "usuario/logs/:usuario_id" : "usuarioLog",
    "usuario/editar/:usuario_id" : "usuarioDetalle", 
    "usuario/sistemas/:usuario_id" : "usuarioSistemas", 
    "usuario/roles_permisos/:usuario_id" : "usuarioRolesPermisos", 
    "usuario" : "usuarioIndex",
    "*actions" : "default",
  },
  index: function(){
    window.location.href = BASE_URL + "accesos/#/sistema";
  },
  default: function() {
    //window.location.href = BASE_URL + "error/access/404";
  },
  sistemaIndex: function(){
    if(this.sistemaView == null){
      this.sistemaView = new SistemaView();
    }
    this.sistemaView.render();
    this.sistemaView.tablaSistema.listar();
  },
  sistemaMenu: function(sistema_id){
    if(this.sistemaMenuView == null){
      this.sistemaMenuView = new SistemaMenuView(dataSistemaMenuView);
    }
    this.sistemaMenuView.render();
    this.sistemaMenuView.tablaModulo.urlListar = 
      limpiarURL(BASE_URL + "modulo/listar/" , sistema_id);
    this.sistemaMenuView.sistemaId = sistema_id;
    this.sistemaMenuView.tablaModulo.listar(sistema_id);
  },
  sistemaPermiso: function(sistema_id){
    if(this.sistemaPermisoView == null){
      this.sistemaPermisoView = new SistemaPermisoView(dataSistemaPermisoView);
    }
    this.sistemaPermisoView.render();
    this.sistemaPermisoView.tablaPermiso.urlListar = 
      limpiarURL(BASE_URL + "permiso/listar/" , sistema_id);
    this.sistemaPermisoView.sistemaId = sistema_id;
    this.sistemaPermisoView.tablaPermiso.listar(sistema_id);
  },
  sistemaRol: function(sistema_id){
    if(this.sistemaRolView == null){
      this.sistemaRolView = new SistemaRolView(dataSistemaRolView);
    }
    this.sistemaRolView.render();
    this.sistemaRolView.tablaRol.urlListar = 
      limpiarURL(BASE_URL + "rol/listar/" , sistema_id);
    this.sistemaRolView.sistemaId = sistema_id;
    this.sistemaRolView.tablaRol.listar(sistema_id);
    this.sistemaRolView.tablaRolPermiso.sistemaId = sistema_id;
  },
});

$(document).ready(function(){
  router = new accesosRouter();
  Backbone.history.start();
})
