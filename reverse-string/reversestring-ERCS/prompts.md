GPT-4o

############################# PROMPT 1 #####################################

Hola, eres un ingeniero de software que conoce javascript profesionalmente y también CSS y HTML, ahora vamos a crear una página web con lógica en JavaScript que invierta el orden de una cadena de texto. usa como base el archivo index.html provisto como contexto, crearas un archivo llamado script.js y lo referenciarás en el index.html si no está referenciado, en ese archivo colocaremos el código javascript generado.

Ejemplo: si introduzco AI4Devs, devuelve sveD4IA.

Extras obligatorios:

Muestra una lista debajo del input con todas las cadenas invertidas anteriormente.

Cada entrada debe tener:

Un campo input para introducir el texto a invertir
Un botón como evento para procesar la cadena en el campo input
Un botón para copiar al portapapeles.
Un botón para volver a cargar esa cadena en el input.
Un check de modo automático activado, si está chequeado, el app automáticamente va reversando la cadena y sólo pasa a la historia cuando el usuario da click en el botón “”copiar”
El historial se guarda en memoria (JS), no en localStorage.

Por favor, requiero que se vea bonito, moderno, puedes usar cualquier framework CSS como bootstrap o materialize o cualquiera que tengas referencia de que sea moderno y visualmente muy atractivo, usa los componentes de dicho framework, si usas un framework debes usarlo importado desde un CDN, así como también cualquier otra librería js que requieras como dependencia.

Tu aplicación debe tener título y una pequeña descripción de que es la tarea que realiza y una breve explicación de su uso.

Me entregarás como salida el archivo index.html con las modificaciones necesarias, un archivo style.css con el css personalizado usado y un archivo script.js con el código javascript necesario.

############################# PROMPT 2 #####################################

He probado la funcionalidad y está perfecto, pero la web se ve fea, a pesar de usar el framework de bootstrap no se ve bonita, debería estar centrado todo, usar los componentes de botones de bootstrap, también darle los estilos de boostrap a los campos de input y checkbox, usar el alert de info donde explicas que hace la app, además como fuente Roboto de google e incluyela en el index.html y usa el componente de listas para el historial, los botones debes de copy y reload debes colocarlos junto a cada línea de texto.

Para esto, quiero que agregues una nueva aptitud a las previas que tenías de ingenerio de software especialista en javascript, html y CSS, ahora también tienes habilidades de ser un gran diseñador web, con buenas prácticas y que realiza diseños increíbles.


############################# PROMPT 3 #####################################


Ahora agregaste un fallo a algo que ya funcionaba, no se está guardando el historial según las condiciones dadas previamente, recuerda las instrucciones obligatorias, recuerda que pedí que esta parte fuera realizada con el componente lista de bootstrap y que los botones de copiar y recargar estén al lado de cada línea.

Agrega la funcionalidad del historial a lo ya realizado, también enriquece el proyecto con algunos emojis para dar indicaciones, agrega también lógica para manejo de errores, por ejemplo que al no ingresar texto y presionar el botón de "Invertir ahora", debería indicarme que debo introducir algún texto al campo, los errores deberían ser indicados en una barra de alerta en la parte superior (no se donde, pero recuerda que eres un especialista en diseño web), agrega también a cada barra creada un icono de la biblioteca glyph de bootstrap indicando que es "Info, Error, Warning, Success"

############################# PROMPT 4 #####################################

Perfecto, el único cambio que quiero ahora es que la barra de notificaciones esté centrada

############################# PROMPT 5 #####################################

La barra de notificaciones cuando sale, tapa el titulo de la web " Inversor de Cadenas", deja un espacio arriba del título para que no se tape, al menos con 2 notificaciones

############################# PROMPT 6 #####################################

no existe la etiqueta html main-container, tu mismo has generado el html, deberías saberlo, tenemos container, pero prefiero que crees una nueva, tal vez main container y modifica el html para que esté incluida, por que la etiqueta container es de bootstrap y podría aparecer en otros lados y afectar otras partes del sitio

