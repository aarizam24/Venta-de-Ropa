function verificarInicioSesion(event) {
    event.preventDefault();
  
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;
  
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
   
    const requisitos = verificarRequisitos(contraseña);
  
    if (contraseña.length < 8) {
      modal.style.display = 'none'; 
      alert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }
  
    if (!requisitos.tieneMayuscula) {
      modal.style.display = 'none'; 
      alert('La contraseña debe contener al menos una mayúscula.');
      return;
    }
  
    if (!requisitos.tieneMinuscula) {
      modal.style.display = 'none'; 
      alert('La contraseña debe contener al menos una minúscula.');
      return;
    }
  
    if (requisitos.numNumeros < 2) {
      modal.style.display = 'none'; 
      alert('La contraseña debe contener al menos dos números.');
      return;
    }
  
    const credencialesPermitidas = [
      { usuario: 'ariza@gmail.com', contraseña: 'Usuario123' },
      { usuario: 'alejo@gmail.com', contraseña: 'Alejo123' },
      { usuario: 'millan@gmail.com', contraseña: 'Millan123' }
    ];
  
    const verificarPromesa = new Promise((resolve, reject) => {
    
      const credencialValida = credencialesPermitidas.find(credencial => {
        return credencial.usuario === usuario && credencial.contraseña === contraseña;
      });
  
      setTimeout(() => {
        modal.style.display = 'none';
  
        if (credencialValida) {
          resolve();
        } else {
          reject('Credenciales incorrectas. Por favor, intenta de nuevo.');
        }
      }, 2000);
    });
  
    verificarPromesa
      .then(() => {
    
        window.location.href = 'paginaprincipal.html';
      })
      .catch((mensajeError) => {
        document.getElementById('mensaje').innerHTML = mensajeError;
      });
  }
  
  function verificarRequisitos(contraseña) {
    const tieneMayuscula = /[A-Z]/.test(contraseña);
    const tieneMinuscula = /[a-z]/.test(contraseña);
    const numNumeros = (contraseña.match(/\d/g) || []).length;
  
    return {
      tieneMayuscula,
      tieneMinuscula,
      numNumeros,
    };
  }
  
  function limpiar() {
    document.getElementById('usuario').value = '';
    document.getElementById('contraseña').value = '';
    document.getElementById('mensaje').innerHTML = '';
  }
  
  