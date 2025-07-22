function agendar(servicio) {
  document.getElementById('servicio').value = servicio;
  document.getElementById('formCita').scrollIntoView({ behavior: 'smooth' });
}

function enviarWhatsApp() {
  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const direccion = document.getElementById('direccion').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const comentarios = document.getElementById('comentarios').value;
  const servicio = document.getElementById('servicio').value;

  const mensaje = `Hola, soy ${nombre}, agendé un servicio con Estefer para el día ${fecha} a las ${hora}.%0ADirección: ${direccion}%0AServicio: ${servicio}%0AComentarios: ${comentarios}`;
  window.open(`https://wa.me/573026645791?text=${mensaje}`, '_blank');
  return false;
}
