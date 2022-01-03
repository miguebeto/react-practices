const getUsuarioActivo = (nombre) => ({
  uid: "ABCD",
  username: nombre
});

const usuarioActivo = getUsuarioActivo("miguel");
console.log(usuarioActivo);
