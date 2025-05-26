
# prompts.md

## Chatbot utilizado:
ChatGPT (OpenAI GPT-40)

## Prompts utilizados:
1. Me están pidiendo que realice un ejercicio en mi curso AI4Devs, te voy a pasar a continuación todo el texto del ejercicio:

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
📤 Entrega
Para entregar, haz una pull request que incluya:

Una carpeta copiada desde template, con el nombre reversestring-iniciales (ejemplo: reversestring-ARM).
Debe incluir:
El código generado.
Un archivo prompts.md con:
El o los prompts utilizados.
El chatbot utilizado.
Todos los prompts en orden de uso.
Agrega el prompt final como comentario en el pull request.

la carpeta templates contiene lo siguiente:
-index.html:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>    
</head>
<body>
<script src="script.js"></script>
</body>
</html>

-prompts.md (vacio)

-script.js (vacio)

Quiero que completes el ejercicio y me devuelvas el contenido que tengo que escribir en cada archivo y ademas me indiques el paso a paso para dar por finalizado el ejercicio, incluyendo el pull request.