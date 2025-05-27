
## Chatbot: ChatGPT 4-o

### Prompt 1
Debo crear una página web usando JavaScript que invierta una cadena de texto ingresada por el usuario. ¿Me puedes ayudar a estructurar la solución paso a paso?

### Prompt 2
La solución debe tener una caja de texto, un botón para invertir el texto, y un historial en pantalla de los textos invertidos anteriormente.

### Prompt 3
Cada entrada en el historial debe tener:
- Un botón para copiar al portapapeles.
- Un botón para volver a cargar esa cadena en el input.

### Prompt 4
Además, el historial debe almacenarse solo en memoria (no en localStorage) y debe haber un checkbox de "modo automático", que al activarse invierta automáticamente el texto mientras se escribe. Pero solo se debe agregar al historial cuando el usuario haga clic en el botón de copiar.

### Prompt 5  Correción
Mira que al invertir la cadena de manera automatica no hay forma de ingresarla al historial

ChatGpt Me pidió corregir la función copyToClipboard y aún asi no aparecia el boton copiar entonces le di el siguiente prompt

### Prompt 6  Correción - agregar botón copiar
el problema es que no hay un boton copiar hasta este punto y lo puedes ver en la imagen

ChatGpt me sugirió ¿Te gustaría que también se limpie el input o se muestre un mensaje de “Copiado con éxito”?

Le dije que adelante

ChatGpt me pidió Reemplazar la función renderPreview

### Prompt 5 (final)
Genera el código completo para `index.html` y `script.js` para que cumpla con todos los requisitos del ejercicio: input de texto, botón de invertir, historial dinámico con copiar/recargar, modo automático con checkbox, y todo almacenado solo en memoria. Además, incluye estilos mínimos. 

