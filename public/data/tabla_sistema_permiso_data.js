var dataTablaPermiso = {
  el: "#formTablePermiso",
  idTable: "tablaPermiso",
  targetMensaje: "mensajeRptaPermiso",
  mensajes: {
    errorListarAjax: "Error en listar los datos del servidor",
    errorGuardarAjax: "Error en guardar los datos en el servidor",
    success: "Se cargado guardo los cambios en los autores",
  },
  urlGuardar: BASE_URL + "permiso/guardar",
  urlListar: BASE_URL + "permiso/listar/",
  fila: {
    id: { // llave de REST
      tipo: "td_id",
      estilos: "color: blue; display:none",
      edicion: false,
    },
    nombre: { // llave de REST
      tipo: "text",
      estilos: "width: 150px;",
      edicion: true,
    },
    llave: { // llave de REST
      tipo: "text",
      estilos: "width: 150px;",
      edicion: true,
    },
    filaBotones: {
      estilos: "width: 80px; padding-left: 7px;"
    },
  },
  tableKeys: ['id', 'nombre', 'llave'],
  filaBotones: [
    {
      tipo: "i",
      claseOperacion: "quitar-fila",
      clase: "fa-times",
      estilos: "padding-left: 25px;",
    },
  ],
  collection: new PermisosCollection(),
  model: "Permiso",
};
