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


## Pregunta (Prompt 2)

En la última versión de `script.js`, ¿por qué has eliminado?

```javascript
module.exports = { reverseString };


## Sugerencia de Mejora (Prompt 3)

Creo que podríamos separar algunas responsabilidades. Por ejemplo, toda la parte del script relacionada con el **historial** debería ir en un fichero `history.js`. Este último se cargaría en el **HTML**, pero **no como módulo**. 

El fichero `script.js` debería cargarse como **módulo** porque también lo usamos dentro de los **tests**.


## Error en la Importación

Me da el siguiente error, ¿podrías corregirlo?

/practices/lidr-projects/AI4Devs-intro-SR/reverse-string/reverse-string-wnv/reverseString.test.js:4
import { reverseString } from "./script.js"; // Importamos desde el archivo script.js
^^^^^^

SyntaxError: Cannot use import statement outside a module

## Creación de Estilos CSS

Ahora vamos a crear un fichero **CSS** para darle estilos a la app. Los estilos deben ser **minimalistas**, pero al mismo tiempo **agradables a la vista**.


## Readme con contexto del proyecto

basado en el contexto que tienes de toda la app crea un fichero Reame que refleje la implementación y la puesta en marcha del proyecto


## Chatbot utilizado
chatgpt model gpt-4o

## Correcciones de los errores

Lo he solucionado iterando con otro prompt indicando el error al modelo para que pudiera corregirlo.