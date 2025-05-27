# Prompts indicados en Claude 4

1. Primer prompt

Necesito que generes una web simple donde tendremos una página web con lógica en JavaScript que invierta el orden de una cadena de texto.
Ejemplo: si introduzco AI4Devs, devuelve sveD4IA.
Hazlo apoyado en los archivos index.html y script.js

También es necesario que:
* Muestre una lista debajo del input con todas las cadenas invertidas anteriormente.
* Cada entrada debe tener:
   * Un botón para copiar al portapapeles.
   * Un botón para volver a cargar esa cadena en el input.
   * Un check de modo automático activado, si está chequeado, el app automáticamente va reversando la cadena y sólo pasa a la historia cuando el usuario da click en el botón “”copiar”
* El historial se guarda en memoria (JS), no en localStorage.

> Funciono a medias porque me genero todo en un sólo fichero.

Lo corregí indicandole a la IA el segundo prompt. Aprendí que hay que especificar si se quiere en un fichero o en dos y decirle tecnicas más especificas.

2. Prompt 2:

hay que separar la solución en un fichero index.html y otro script.js

