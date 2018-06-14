var dataTablaSubtitulo = {
  el: "#formTableSubtitulo",
  idTable: "tablaSubtitulo",
  targetMensaje: "mensajeRptaSubtitulo",
  mensajes: {
    errorListarAjax: "Error en listar los datos del servidor",
    errorGuardarAjax: "Error en guardar los datos en el servidor",
    success: "Se cargado guardo los cambios en los autores",
  },
  urlGuardar: BASE_URL + "subtitulo/guardar",
  urlListar: BASE_URL + "subtitulo/listar/",
  fila: {
    id: { // llave de REST
      tipo: "td_id",
      estilos: "color: blue; display:none",
      edicion: false,
    },
    nombre: { // llave de REST
      tipo: "text",
      estilos: "width: 120px;",
      edicion: true,
    },
    filaBotones: {
      estilos: "width: 80px; padding-left: 7px;"
    },
  },
  tableKeys: ['id', 'nombre',],
  filaBotones: [
    {
      tipo: "i",
      claseOperacion: "ver-items",
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
  collection: new SubtitulosCollection(),
  model: "Subtitulo",
};
