// ============ CÍRCULOS INTERACTIVOS ============
document.addEventListener('DOMContentLoaded', function() {
  console.log('🎯 JS cargado - Buscando círculos...');
  
  // Verificar si los dots existen y son visibles
  setTimeout(() => {
    const dots = document.querySelectorAll('.dot');
    console.log('🔍 Círculos encontrados:', dots.length);
    
    dots.forEach((dot, index) => {
      console.log(`Dot ${index + 1}:`, {
        visible: dot.offsetWidth > 0,
        styles: window.getComputedStyle(dot)
      });
    });
  }, 100);

  const dots = document.querySelectorAll('.dot');
  console.log('🔍 Círculos encontrados:', dots.length);
  
  if (dots.length === 0) {
    console.log('❌ No hay círculos en esta página');
    return;
  }

  // Mensajes divertidos
  const mensajesDivertidos = [
    "¡Las formas están vivas! 🎨",
    "Cada círculo cuenta una historia...",
    "Forma Hub: donde las ideas toman forma",
    "¡Hiciste clic en la creatividad! +10 puntos",
    "Este círculo contiene 100% de inspiración gratis",
    "Shhh... los otros círculos tienen celos",
    "¡Forma mágica desbloqueada! ✨",
    "Este círculo aprobó tu buen gusto",
    "Clic aquí para recargar dosis de diseño"
  ];

  // Crear contenedor para mensajes
  const contenedorMensajes = document.createElement('div');
  contenedorMensajes.className = 'mensaje-divertido';
  contenedorMensajes.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #e43201;
    color: white;
    padding: 15px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    z-index: 10000;
    font-family: 'Futura', sans-serif;
    font-weight: bold;
    max-width: 280px;
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.4s ease;
    pointer-events: none;
    font-size: 14px;
    border: 2px solid white;
  `;
  document.body.appendChild(contenedorMensajes);

  let tiempoMensaje;

  // Hacer cada círculo clickeable
  dots.forEach((circulo, indice) => {
    // Hacer que se vea clickeable
    circulo.style.cursor = 'pointer';
    
    circulo.addEventListener('click', function() {
      console.log('🎯 Círculo clickeado:', indice + 1);
      
      // Efecto visual inmediato
      this.style.transform = 'scale(1.3)';
      this.style.backgroundColor = '#99aa16'; // Verde
      
      // Volver a la normalidad después de 0.3 segundos
      setTimeout(() => {
        this.style.transform = '';
        this.style.backgroundColor = '';
      }, 300);

      // Mostrar mensaje aleatorio
      const mensajeAleatorio = mensajesDivertidos[Math.floor(Math.random() * mensajesDivertidos.length)];
      mostrarMensaje(mensajeAleatorio);
    });

    // Efecto cuando el mouse pasa por encima
    circulo.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
    });

    circulo.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });

  function mostrarMensaje(mensaje) {
    // Limpiar mensaje anterior
    if (tiempoMensaje) {
      clearTimeout(tiempoMensaje);
    }

    // Mostrar nuevo mensaje (usando innerHTML para emojis)
    contenedorMensajes.innerHTML = mensaje;
    contenedorMensajes.style.opacity = '1';
    contenedorMensajes.style.transform = 'translateY(0)';
    
    // Ocultar después de 3 segundos
    tiempoMensaje = setTimeout(() => {
      contenedorMensajes.style.opacity = '0';
      contenedorMensajes.style.transform = 'translateY(20px)';
    }, 3000);
  }

  // Mensaje de bienvenida
  setTimeout(() => {
    mostrarMensaje('¡Hacé clic en los círculos! 🎯');
  }, 1000);
  
  console.log('✅ Círculos listos para usar');
});

// ============ NEWSLETTER SIMPLE ============
document.addEventListener('DOMContentLoaded', function() {
  const formularioNewsletter = document.querySelector('.newsletter-form');
  
  if (formularioNewsletter) {
    formularioNewsletter.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('.newsletter-input');
      const boton = this.querySelector('.btn-newsletter');
      const email = emailInput.value.trim();
      
      // Validación simple
      if (!email.includes('@') || !email.includes('.')) {
        alert('Por favor, ingresá un email válido 📧');
        return;
      }
      
      // Simular envío
      boton.textContent = 'Enviando...';
      boton.disabled = true;
      
      setTimeout(() => {
        boton.textContent = '¡Listo! ✓';
        emailInput.value = '';
        
        setTimeout(() => {
          boton.textContent = 'Suscribirme';
          boton.disabled = false;
        }, 2000);
      }, 1500);
    });
  }
});

// ============ SCROLL SUAVE ============
document.addEventListener('DOMContentLoaded', function() {
  const enlaces = document.querySelectorAll('a[href^="#"]');
  
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      const objetivo = document.querySelector(href);
      if (objetivo) {
        e.preventDefault();
        objetivo.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

console.log('🎨 Forma Hub - Todo listo para usar');