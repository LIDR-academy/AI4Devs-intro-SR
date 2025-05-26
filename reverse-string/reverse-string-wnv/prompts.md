# Reverse String App with JavaScript Logic (Prompt 1)

## Requisitos

Eres un **Senior Software Engineer** y debes crear una página web con lógica en **JavaScript** que invierta el orden de una cadena de texto.

### Funcionalidades

1. La aplicación debe mostrar un **input** donde el usuario pueda ingresar una cadena de texto.
2. Al ingresar la cadena y presionar un botón, la aplicación debe invertir la cadena y mostrarla.
   
   **Ejemplo**: si introduzco `AI4Devs`, la salida debe ser `sveD4IA`.

3. Además, debajo del input, debe aparecer una lista con todas las cadenas invertidas previamente.

4. Cada entrada en el historial debe tener los siguientes botones:
   - Un botón para **copiar al portapapeles**.
   - Un botón para **volver a cargar esa cadena** en el input.
   
5. Se debe implementar un **checkbox de modo automático**:
   - Si está marcado, la aplicación invertirá la cadena de forma automática y solo la guardará en el historial cuando el usuario haga clic en el botón **"copiar"**.
   
6. El historial se debe guardar en **memoria (JS)**, **no** en **localStorage**.

### Estructura inicial

1. **Archivo HTML (index.html)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>    
</head>
<body>
    <!-- Aquí irá el código de la aplicación -->
    <script src="script.js"></script>
</body>
</html>
