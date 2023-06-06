function calcularCalificacionFinal() {
    const parcial1 = parseInt(document.getElementById('parcial1').value);
    const parcial2 = parseInt(document.getElementById('parcial2').value);
    const parcial3 = parseInt(document.getElementById('parcial3').value);
  
    if (isNaN(parcial1) || isNaN(parcial2) || isNaN(parcial3)) {
      document.getElementById('calificacionFinal').innerText = 'Ingresa calificaciones válidas';
      return;
    }
  
    const calificacionFinal = (parcial1 + parcial2 + parcial3) / 3;
    document.getElementById('calificacionFinal').innerText = calificacionFinal.toFixed(2);
  }