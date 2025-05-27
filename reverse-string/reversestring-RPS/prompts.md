# Prompts reversestring-RPS

## Herramienta utilizada: ChatGPT 4o

### Hilo de solicitudes:

Eres un experto desarrollador en Javascript y HTML, con nociones avanzadas de gestión de memoria JS y desarrollo de soluciones a medida.

Quiero que codifiques una aplicación web cuya principal funcionalidad sea invertir el orden de una cadena de texto. La página web tendrá un input de texto en el que el usuario escribirá una cadena, y al clicar sobre el botón "Invertir" se ejecutará la inversión de la cadena. Todas las cadenas que se vayan invirtiendo se guardarán y se mostrarán en un historial debajo del input. Adicionalmente, el programa debe tener un checkbox de "Modo automático": si está chequeado, el app automáticamente va reversando la cadena y sólo pasa al historial cuando el usuario da click en el botón "Invertir".

El front de la aplicación quiero que lo generes en un único archivo html (index.html) y toda la lógica quiero que la generes en un archivo script.js.

Consideraciones importantes:
1. Muestra una lista debajo del input con todas las cadenas invertidas anteriormente.
2. Cada entrada de este listado debe tener un botón para copiar el texto al portapapeles y un botón para volver a cargar esta cadena en el input de texto
3. El historial se guarda en memoria (JS), no en localStorage.

Un ejemplo:
- Si introduzco AI4Devs, devuelve sveD4IA

Utiliza esta plantilla de index.html como punto de partida:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String RPS</title>    
</head>
<body>
<script src="script.js"></script>
</body>
</html>

---

*Aquí tienes los archivos completos para tu aplicación web de inversión de cadenas, usando memoria JS y cumpliendo con todas tus especificaciones.*

*... (incluye index.html y script.js con funcionalidades completas)*

---

He encontrado varias casuísticas en la aplicación:
1. En el historial se deberían mostrar la cadena original y la invertida, por lo que añadiremos un botón para copiar al portapapeles la original y otro para copiar la invertida. El botón "Recargar" recarga la cadena original en el input.
2. El "Modo automático" no funciona como debería. Si el modo automático está activado, se debería mostrar una previsualización del texto invertido debajo del input, y si el usuario quiere añadirla al historial, lo hace clicando el botón de "Invertir". Si está desactivado, no se muestra la previsualización y solo se añade al historial si el usuario clica en "Invertir"

---

*Gracias por detallar los ajustes necesarios. A continuación te presento la versión mejorada de la aplicación...*

*... (código actualizado de index.html y script.js con historial extendido y modo automático corregido)*

---

Perfecto! un último ajuste: Cuando el usuario invierta cualquier cadena, limpia el input de entrada

---

*Perfecto, ese comportamiento es muy sencillo de aplicar. Solo hay que limpiar el input y eliminar la previsualización una vez que el usuario haga clic en el botón "Invertir"...*

*... (script.js ajustado con limpieza del input)*

---

Listo! Por último, quiero que exportes esta misma conversación que hemos tenido a un archivo markdown, donde mis preguntas se escriban en texto plano normal, y tus respuestas en cursiva
