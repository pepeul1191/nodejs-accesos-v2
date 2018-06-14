var dataTablaRol = {
  el: "#formTableRol",
  idTable: "tablaRol",
  targetMensaje: "mensajeRptaRol",
  mensajes: {
    errorListarAjax: "Error en listar los datos del servidor",
    errorGuardarAjax: "Error en guardar los datos en el servidor",
    success: "Se cargado guardo los cambios en los autores",
  },
  urlGuardar: BASE_URL + "rol/guardar",
  urlListar: BASE_URL + "rol/listar/",
  fila: {
    id: { // llave de REST
      tipo: "td_id",
      estilos: "color: blue; display:none",
      edicion: false,
    },
    nombre: { // llave de REST
      tipo: "text",
      estilos: "width: 200px;",
      edicion: true,
    },
    filaBotones: {
      estilos: "width: 80px; padding-left: 7px;"
    },
  },
  tableKeys: ['id', 'nombre'],
  filaBotones: [
    {
      tipo: "i",
      claseOperacion: "ver-permisos",
      clase: "fa-chevron-right",
      estilos: "padding-left: 17px;",
    },
    {
      tipo: "i",
      claseOperacion: "quitar-fila",
      clase: "fa-times",
      estilos: "padding-left: 10px;",
    },
  ],
  collection: new RolesCollection(),
  model: "Rol",
};
