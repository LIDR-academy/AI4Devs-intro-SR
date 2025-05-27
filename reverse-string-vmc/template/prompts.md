
## Prompts utilizados V.Manzanal
**IA utilizada: ChatGPT**

## Prompt 1

Crea una página web con lógica en JavaScript que invierta el orden de una cadena de texto.

Ejemplo: si introduzco AI4Devs, devuelve sveD4IA.

Hazlo apoyado en los archivos index.html y script.js que proporcionamos dentro de la carpeta template.

Utiliza un chatbot, como ChatGPT o Gemini, no un asistente de código en un IDE como GitHub Copilot.

Extras obligatorios:

Muestra una lista debajo del input con todas las cadenas invertidas anteriormente.
Cada entrada debe tener:
Un botón para copiar al portapapeles.
Un botón para volver a cargar esa cadena en el input.
Un check de modo automático activado, si está chequeado, el app automáticamente va reversando la cadena y sólo pasa a la historia cuando el usuario da click en el botón “”copiar”
El historial se guarda en memoria (JS), no en localStorage.

*Adicionalmente he cargado la plantilla `index.html`

### Problemas
1. El código generado invierte la cadena en el propio input, 

### Prompt 2
Modifica el proyecto para que el texto reverse generado no se guarde en el mismo input "inputText" sino en una linea posterior con el label ReversedText: [texto invertido], cuando esté activado el "autoMode" el texto invertido debe aparecer en esta linea, no cambiarlo en "inputText", en "inputText" dejaremos la cadena de caracteres original.
### Problemas
1. Cuando se usa el botón reload el texto se carga invertido en el input, no en la línea "reversedText", así que sale todo al revés :D

### Prompt 3
Casi perfecto, pero el comportamiento del botón reload no es el esperado, está cargando el texto invertido en inputText y aparece el texto original en reversedOutput. Debe ser al revés, al usar el botón reload en inputText debemos ver el texto original y en reversedOutput el texto invertido. Adicionalmente, cambia el label "ReversedText:" por "Reversed text:"
### Problemas
Yo aquí ya lo veía todo bien :) pero pedí unas pequeñas mejoras para aliviar mi TOC.

### Prompt 4
como ultimo detalle, a la derecha del botón "Reverse", añade otro botón "Clean" que vacíe el contenido del input "inputText", separa un poco los botones, que no queden muy pegados, que me da TOC. como detalle adicional también veo los botones del portapapeles y el reload muy pegados ¿puedes separarlos también un poco?
### respuesta final... el TOC-friendly vale millones 😎
✅ Resultado final
Espaciado limpio y agradable en los botones principales y en cada entrada del historial.

Función de limpiar el input y el resultado en un clic con "Clean".

Diseño simple y sin dependencias externas. Minimalista, pero eficaz y TOC-friendly 🧼✨

¿Quieres el .zip ahora? ¿O le damos un estilo con CSS bonito como extra?