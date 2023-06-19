// Obtener referencias a los elementos HTML
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const textInput = document.getElementById('text-input');
const generateBtn = document.getElementById('generate-btn');

// Cargar una imagen predefinida
const imagenURL = 'https://example.com/ruta-de-la-imagen.jpg'; // Reemplaza con la URL de tu imagen
const imagen = new Image();
imagen.crossOrigin = 'Anonymous'; // Permite el acceso a imágenes de otros dominios
imagen.onload = function() {
  canvas.width = imagen.width;
  canvas.height = imagen.height;
  ctx.drawImage(imagen, 0, 0);
};
imagen.src = imagenURL;

// Función para generar el meme con el texto ingresado
function generarMeme() {
  const texto = textInput.value;
  
  // Configuración del estilo del texto
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 2;
  ctx.font = 'bold 36px sans-serif';
  ctx.textAlign = 'center';
  
  // Posición del texto centrado en el canvas
  const x = canvas.width / 2;
  const y = canvas.height - 20;
  
  // Dibujar el texto en el canvas
  ctx.fillText(texto, x, y);
  ctx.strokeText(texto, x, y);
}

// Evento click del botón Generar Meme
generateBtn.addEventListener('click', function() {
  generarMeme();
});

/*
En este ejemplo, el usuario puede cargar una imagen predefinida proporcionando
la URL de la imagen en el código JavaScript. Luego, se dibuja la imagen en un
elemento <canvas> en el HTML.

El usuario puede ingresar el texto deseado en el campo de texto y hacer 
clic en el botón "Generar Meme". La función generarMeme toma el texto ingresado 
y lo dibuja en el <canvas> utilizando la configuración de estilo definida.

Nota: Dado que se utiliza un elemento <canvas> y se carga una imagen de otro 
dominio, es importante tener en cuenta las políticas de seguridad del 
navegador en cuanto a permisos de acceso a imágenes de otros dominios.
Asegúrate de que la imagen que utilices esté disponible y permita el acceso 
desde el dominio en el que se aloje tu aplicación.
*/
