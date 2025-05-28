*** CHATGPT 4o ***

Primer prompt: 
---------------------------------------------------

Necesito crear una página web con lógica en javascript que invierta el orden de una cadena de texto.

Para ello necesito que lo ejecutes creando dos ficheros, uno que se llame index.html, donde aparezca  centrado de forma vertical y horizontal en la pantalla del navegador, un H1 que indique: "Introduce la cadena de texto a invertir:", debajo de este H1 un input text donde pueda escribir la cadena de texto, y debajo un botón centrado con el texto "Invertir texto".

Debajo del botón, crea un div vacío, que este oculto al principio, pero cuando se devuelva el resultado, aparezca con un H2 que indique: "Cadena invertida" y debajo el resultado de la cadena invertida en un div con color verde muy suave.

Al clicar al botón, este debe ejecutar la lógica en javascript en un fichero script.js. Este recibirá el valor del input text, y por ejemplo, si introduzco "AI4Devs" devuelve "sveD4IA".

Cada vez que introduzco un texto nuevo, y le doy al botón, reemplaza el contenido del div de Cadena invertida



Segundo prompt
---------------------------------------------------

tengo que hacer una corrección en el código.

En el div de cadena invertida, se debe mostrar una lista de todas con todas las cadenas invertidas anteriormente.

* Cada cadena invertida, alineada a la izquierda del div, debe tener en su lado derecho y alineado a la derecha del input, un icono de copiar al portapapeles

* Al lado del icono de copiar al portapapeles, debe haber botón para volver a cargar esa cadena en el input.

Además, ten en cuenta que el historial de cadenas invertidas se guarda en memoria (JS), no en localStorage.
