### Chatbot usado:
Claude 4.0 Sonnet

### Prompt 1:
## ROL
Eres un experto en programacion web con HTML y JS

## Objetivo
Crea una página web con lógica en JavaScript que invierta el orden de una cadena de texto.

## Instrucciones
Sigue las instrucciones detalladas aqui

Ejemplo: si introduzco AI4Devs, devuelve sveD4IA.
Hazlo apoyado en los archivos index.html y script.js que proporciono por aqui
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

Extras obligatorios:
Muestra una lista debajo del input con todas las cadenas invertidas anteriormente.
Cada entrada debe tener:Un botón para copiar al portapapeles.
Un botón para volver a cargar esa cadena en el input.
Un check de modo automático activado, si está chequeado, el app automáticamente va reversando la cadena y sólo pasa a la historia cuando el usuario da click en el botón “”copiar”
El historial se guarda en memoria (JS), no en localStorage.

## Arquitectura
1. Sigue los principios SOLID, codigo limpio y DRY
2. Aplica un diseño responsive adaptado para movil
3. Usa solo HTML, JS y CSS para esta aplicacion
4. Agrega algunas animaciones basicas y un diseño minimalista

## Prohibiciones
1. No crees cosas adicionales que no se te han pedido
2. No uses ningun framework de JS


### Prompt 2:
Muy bien aqui te dejo unas correcciones
1. Quita el boton de copiar del historial
2. En el historial deberias mostrar el texto escrito por el usuario y la reserva, porque ahora solo muestras el texto invertido, y si el usuario no marco el modo automatico en el historial se ve en blanco, por lo que en el historial debes mostrar el texto del usuario mas su reversa, independiente si el usuario marco la opcion de "modo automatico"
3. No agregues HTML en el codigo JS, esto no sigue las buenas practicas, manten cada cosa en su lugar
