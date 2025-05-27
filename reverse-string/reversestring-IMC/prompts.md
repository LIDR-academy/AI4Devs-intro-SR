# PROMPTS

## Chatbot utilizado

Para la realización de este ejercicio, he utilizado ChatGPT 4o


## Prompts utilizados

### Primer prompt

Tengo dos ficheros, index.html y script.js, y necesito implementar una sencilla aplicación Web a la que llamaremos "Reverse String" que servirá para invertir cadenas. La página Web debe mostrar el título de la aplicación, debajo un input de texto en el que el usuario indicará la cadena de entrada (añadir un placeholder del tipo "Write any text..."). Debajo, un botón con la leyenda "Reverse" y un checkbox "automatic mode activated" (desmarcado por defecto). De inicio, solo se debe mostrar esto en la página Web. 

Al hacer click sobre el botón, utilizando código javascript (que debe incluirse en el fichero script.js), deberá ir registrando en un array cada cadena invertida, y mostrará, en la parte inferior, una tabla que contenga tantas filas como cadenas se hayan convertido. A la derecha de cada cadena, deben mostrarse dos botones: un botón "reload" que, utilizando también funciones javascript incluidas en el mismo fichero script.js, copie la cadena que se muestra en su misma fila al input (permitiendo así al usuario invertir de nuevo la cadena y obtener la cadena original), y un segundo botón "copy" que copiará la cadena al portapapeles.

Respecto al checkbox indicado anteriormente, si está marcado, la cadena se traduce en tiempo real y se muestra en un div que está oculto por defecto y que se hace visible al activar el modo automático (marcando el checkbox). Ese div contiene un span para ir mostrando el texto invertido y un botón "save" para guardar en el array que contiene el historial de cadenas invertidas, de forma que aparecerá en la tabla de abajo.

Si el usuario no ha indicado ningún texto cuando se pulse el botón, se mostrará un mensaje (tipo alert) indicando al usuario que debe introducir una cadena de texto y no hará nada más.

Para la maquetación del HTML, utilizar un diseño moderno y minimalista, aplicando estilos en la cabecera (no se puede incluir ningún otro fichero aparte de index.html y script.js). Los botones deben ser flat-style y utilizar un icono identificativo a la derecha de la leyenda. El código del fichero script.js debe estar bien organizado y documentado.

### Resultado obtenido tras el primer prompt

El código proporcionado parece que cumple con todos los requerimientos a la primera, y solo observo un pequeño error de maquetación, pues los botones de copiar y recargar del histórico aparecen pegados y uno encima del otro, así que voy a solicitarle los cambios a ChatGPT.

### Segundo prompt para corregir el fallo estático

 Observo que los botones de la tabla se montan y no quedan bien. Me gustaría que quedasen en la misma línea, con una pequeña separación entre ellos. ¿Me indicas los cambios a aplicar en el HTML?

 ### Resultado obtenido tras el segundo prompt

 ChatGPT me propone unos cambios CSS y, tras incluirlos, ya lo veo todo correcto, el diseño es razonable para el objetivo del ejercicio y la lógico parece totalmente correcta. 