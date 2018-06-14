var dataTablaModulo = {
  el: "#formTableModulo",
  idTable: "tablaModulo",
  targetMensaje: "mensajeRptaModulo",
  mensajes: {
    errorListarAjax: "Error en listar los datos del servidor",
    errorGuardarAjax: "Error en guardar los datos en el servidor",
    success: "Se cargado guardo los cambios en los autores",
  },
  urlGuardar: BASE_URL + "modulo/guardar",
  urlListar: BASE_URL + "modulo/listar/",
  fila: {
    id: { // llave de REST
      tipo: "td_id",
      estilos: "color: blue; display:none",
      edicion: false,
    },
    nombre: { // llave de REST
      tipo: "text",
      estilos: "width: 80px;",
      edicion: true,
    },
    icono: { // llave de REST
      tipo: "text",
      estilos: "width: 80px;",
      edicion: true,
    },
    url: { // llave de REST
      tipo: "text",
      estilos: "width: 80px;",
      edicion: true,
    },
    filaBotones: {
      estilos: "width: 80px; padding-left: 7px;"
    },
  },
  tableKeys: ['id', 'nombre', 'icono', 'url'],
  filaBotones: [
    {
      tipo: "i",
      claseOperacion: "ver-subtitulos",
      clase: "fa-chevron-right",
      estilos: "padding-left: 17px;",
    },
    {
      tipo: "i",
      claseOperacion: "quitar-fila",
      clase: "fa-times",
      estilos: "padding-left: 7px;",
    },
  ],
  collection: new ModulosCollection(),
  model: "Modulo",
};
