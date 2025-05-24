# Prompt 1
Estoy realizando un máster orientado a aplicar Inteligencia Artificial en el desarrollo de software.

El objetivo es convertirse en un ingenio de software aumentado por IA y multiplicar mi productividad y impacto.

Ahora mismo estoy haciendo un ejercicio en el que se me pide que utilice inteligencia artificial para realizarlo. Concretamente se limita al uso de chatbots como ChatGPT.

Quiero que te comportes como un ingeniero del prompting especialista en utilizar Inteligencia Artificial para el desarrollo del software.

Tu objetivo es escribir el prompt perfecto para que una inteligencia artificial tipo ChatGPT pueda desarrollar el código y todas las tareas necesarias para que llevar a cabo el ejercicio cumpliendo todos los requerimientos de éste y todas las buenas prácticas que consideres. Puedes divir la tarea en varios prompts si lo consideras necesario

Hazme todas las preguntas que necesites para llevar a cabo esta tarea.

A continuación voy a pegarte las instrucciones del ejercicio:

---

## 🔤 Reverse string ES

Crea una página web con lógica en JavaScript que invierta el orden de una cadena de texto.

**Ejemplo**: si introduzco `AI4Devs`, devuelve `sveD4IA`.

Hazlo apoyado en los archivos `index.html` y `script.js` que proporcionamos dentro de la carpeta `template`.

Utiliza un chatbot, como **ChatGPT** o **Gemini**, no un asistente de código en un IDE como **GitHub Copilot**.

**Extras obligatorios:**
- Muestra una lista debajo del input con todas las cadenas invertidas anteriormente.
- Cada entrada debe tener:
  - Un botón para copiar al portapapeles.
  - Un botón para volver a cargar esa cadena en el input.
  - Un check de modo automático activado, si está chequeado, el app automáticamente va reversando la cadena y sólo pasa a la historia cuando el usuario da click en el botón “”copiar”
- El historial se guarda en memoria (JS), no en localStorage.

### 📤 Entrega

Para entregar, haz una pull request que incluya:

- Una carpeta copiada desde `template`, con el nombre `reversestring-iniciales` (ejemplo: `reversestring-ARM`).
- Debe incluir:
  - El código generado.
  - Un archivo `prompts.md` con:
    - El o los prompts utilizados.
    - El chatbot utilizado.
    - Todos los prompts en orden de uso.
- Agrega el **prompt final** como comentario en el pull request.

¡Éxitos!

---
# Salida Prompt 1
Perfecto, Miguel Ángel. Para diseñar el **prompt perfecto** que cumpla todos los requisitos del ejercicio, necesito primero hacerte unas preguntas clave. Cuanto más claros estén los objetivos y limitaciones, mejor será el resultado del prompt.

---

### 🧠 Preguntas previas

1. **¿Tienes alguna preferencia de estilo o estructura en el código?**

   * ¿Prefieres un enfoque modular, con funciones bien separadas?
   * ¿Te interesa aplicar algún patrón (MVC, eventos, etc.)?

2. **¿Vas a usar librerías externas o solo JavaScript puro (vanilla JS)?**

   * ¿Está permitido usar librerías como `clipboard.js` o debe hacerse todo con JS nativo?

3. **¿Quieres que el HTML y JS estén separados (como parece por el uso de `index.html` y `script.js`), o se permite algo de lógica en el HTML?**

4. **¿El prompt debe estar optimizado para GPT-4 (ChatGPT), o tienes pensado usar otro modelo como Gemini?**

5. **¿Qué nivel de detalle quieres en el `prompts.md`?**

   * ¿Solo los prompts tal cual se usaron o también un breve comentario del porqué de cada uno?

6. **¿Tienes el archivo `template` o debo asumir cómo están estructurados `index.html` y `script.js` inicialmente?**

7. **¿Hay alguna convención de nomenclatura o estilo (linting, uso de `let/const`, camelCase, etc.) que deba seguirse?**

---

En cuanto me confirmes estos puntos, te propongo un prompt maestro (o varios si lo divido en pasos) optimizado para ChatGPT, listo para generar el proyecto cumpliendo todos los requisitos y buenas prácticas.

¿Seguimos?

# Prompt 2
Utiliza la preferencia de estilo o estructura que consideres más conveniente. Tú eres el experto.

Respecto a utilizar librerías externas o Javascript puro, haz lo que consideres mejor. Ten en cuenta el contexto del curso y el ejemplo concreto sobre el que estamos trabajando.

El HTML y el JS deben estar separados, puesto que así lo requiere el enunciado del ejercicio.

Optimiza el PROMPT para GPT-4, que es el modelo que vamos a utilizar.

Olvídate del archivo froms.md. Esa parte la gestionaré yo.

Te adjunto el archivo index.html. El archivo script.js está vacío. Recuerda que tu objetivo es redactar el o los prompts necesarios para que una inteligencia artificial pueda resolver el problema creando contenido para los archivos index y script. 

Utiliza la convención de nomenclatura y estilo que consideres oportuna, dado que eres un experto.

# Salida Prompt 2
Gracias, Miguel Ángel. Con toda esta información, voy a redactar un conjunto de **prompts optimizados para GPT-4** que permitirán desarrollar el proyecto de forma robusta y conforme a los requisitos del ejercicio.

---

## 🧩 Enfoque general

He dividido el trabajo en **3 prompts secuenciales**, cada uno orientado a resolver una parte del ejercicio:

1. Crear el HTML base (`index.html`)
2. Desarrollar la lógica completa en `script.js`
3. Realizar mejoras y validaciones finales (buenas prácticas, usabilidad, etc.)

---

## 🧠 Prompt 1: Generar `index.html`

```markdown
Quiero que actúes como desarrollador web experto.

Estoy trabajando en una pequeña aplicación web que debe invertir una cadena de texto introducida por el usuario. Ya tengo una estructura mínima en `index.html`, pero necesito completarla para que cumpla lo siguiente:

- Debe contener:
  - Un `input` de texto para que el usuario introduzca la cadena.
  - Un botón que invierta la cadena usando la lógica definida en `script.js`.
  - Un `checkbox` para activar el "modo automático": si está activado, se debe invertir automáticamente cada vez que el usuario escriba.
  - Una lista (`ul`) que muestre el historial de cadenas invertidas, donde cada entrada tenga:
    - La cadena invertida.
    - Un botón para copiar al portapapeles.
    - Un botón para volver a cargar esa cadena en el input.

Por favor, genera el contenido completo del archivo `index.html` teniendo en cuenta:

- El `script.js` ya está referenciado.
- No debe haber lógica JS en el HTML.
- Usa nombres de clases e identificadores claros y consistentes.
- Usa solo HTML5 y CSS mínimo si es necesario.
```

---

## ⚙️ Prompt 2: Generar `script.js`

```markdown
Estoy trabajando en una aplicación web que invierte una cadena de texto introducida por el usuario.

El HTML ya está definido y contiene:
- Un campo de texto (`input`) para la cadena original.
- Un botón para invertir la cadena.
- Un checkbox que activa el modo automático: si está activado, la cadena se invierte automáticamente mientras el usuario escribe.
- Una lista (`ul`) que muestra el historial de cadenas invertidas.
  - Cada entrada debe contener:
    - La cadena invertida.
    - Un botón para copiar al portapapeles.
    - Un botón para volver a cargar esa cadena en el input.

Necesito que escribas el contenido completo del archivo `script.js` siguiendo estas condiciones:

- Usa JavaScript moderno (ES6+).
- Aplica buenas prácticas de claridad, reutilización de funciones y separación de responsabilidades.
- Todo el historial se guarda solo en memoria (no usar localStorage).
- La entrada solo se guarda en el historial cuando el usuario hace clic en el botón de "copiar".
- Al pulsar el botón de "recuperar", la cadena se coloca nuevamente en el input y se actualiza el resultado si el modo automático está activado.
- El botón de "copiar" debe usar la API moderna del portapapeles (`navigator.clipboard.writeText`).
```

---

## ✅ Prompt 3: Mejora y revisión final

```markdown
Aquí tienes el código completo de `script.js` y `index.html` para una aplicación que invierte cadenas.

Tu tarea es actuar como un experto en buenas prácticas de desarrollo frontend y revisar el código para:

- Identificar oportunidades de mejora (legibilidad, eficiencia, accesibilidad).
- Sugerir mejoras en la estructura del DOM, eventos, o estilo.
- Proponer mejoras en la experiencia de usuario (mensajes, manejo de errores, etc.).
- Confirmar que todos los requisitos funcionales están cubiertos correctamente.

Si lo consideras necesario, devuelve una versión mejorada del código con comentarios breves explicando los cambios clave.
```

---

¿Quieres que genere directamente el código final utilizando estos prompts como si yo fuera ChatGPT, o prefieres introducirlos tú mismo en GPT-4 paso a paso para experimentar con el flujo?
  

# Nuevo Chat Prompt 1
Quiero que te comportes como un ingeniero de software senior especializado en desarrollo de aplicaciones web.

Voy a pasarte una especificación para una web sencilla. Quiero que analices la especificación, utilizando las mejores prácticas, y me generes una especificación completa y detallada de la aplicación web que se quiere conseguir. Hazme las preguntas que consigas necesarias.

Reverse string ES
Crea una página web con lógica en JavaScript que invierta el orden de una cadena de texto.

Ejemplo: si introduzco AI4Devs, devuelve sveD4IA.



Extras obligatorios:

Muestra una lista debajo del input con todas las cadenas invertidas anteriormente.
Cada entrada debe tener:
Un botón para copiar al portapapeles.
Un botón para volver a cargar esa cadena en el input.
Un check de modo automático activado, si está chequeado, el app automáticamente va reversando la cadena y sólo pasa a la historia cuando el usuario da click en el botón “”copiar”
El historial se guarda en memoria (JS), no en localStorage.

# Salida Nuevo Chat Prompt 1
Perfecto, Miguel Ángel. A continuación te presento un análisis técnico detallado del proyecto propuesto, basado en buenas prácticas de desarrollo web, junto con una serie de preguntas para precisar algunos aspectos clave antes de redactar la especificación final.

---

## 🧠 Análisis Inicial

### 🎯 **Objetivo**

Desarrollar una aplicación web sencilla en la que el usuario introduce una cadena de texto, y esta se invierte. Además, se debe gestionar un historial en memoria con funcionalidades específicas.

---

## 📐 Especificación Técnica Detallada

### 1. **Tecnologías a Utilizar**

* **Frontend:** HTML5, CSS3, JavaScript (vanilla)
* **Sin frameworks ni librerías externas**, salvo que se indique lo contrario.
* **No se requiere backend**.
* **Memoria local:** solo memoria viva en JS (nada persistente como `localStorage`, `sessionStorage` o cookies).

---

### 2. **Componentes de la UI**

#### 2.1. **Input principal**

* Campo de texto para introducir una cadena.
* Botón para invertir la cadena (visible solo si *modo automático* está desactivado).
* Checkbox de “modo automático”:

  * Si está activado, la inversión se hace en tiempo real (al escribir).
  * Si está desactivado, el usuario debe hacer clic para invertir.

#### 2.2. **Resultado actual**

* Texto invertido mostrado en pantalla justo debajo del input (siempre visible tras invertir).
* En *modo automático*, este se actualiza en tiempo real con cada cambio del input.

#### 2.3. **Historial de resultados**

Una lista que muestra las cadenas invertidas anteriormente **únicamente cuando el usuario presiona el botón “copiar”**. Cada ítem contiene:

* El texto invertido.
* Botón “copiar al portapapeles”.
* Botón “volver a cargar en input” (rellena el campo de texto con la cadena original).
* Indicador visual si fue generado en modo automático (por ejemplo, un icono o tooltip).

---

### 3. **Lógica de la Aplicación (JS)**

#### 3.1. **Inversión de texto**

* Método para invertir una cadena: `split("").reverse().join("")`.

#### 3.2. **Modo automático**

* Detecta cambios (`input` event) y actualiza el resultado al instante.
* **No** añade automáticamente al historial hasta que el usuario pulsa “copiar”.

#### 3.3. **Gestión del historial**

* Array en memoria (`let history = []`) que almacena objetos:

  ```js
  {
    original: "AI4Devs",
    reversed: "sveD4IA",
    autoMode: true
  }
  ```
* Se actualiza solo al hacer clic en “copiar”.
* Cada entrada es renderizada con las funcionalidades correspondientes.

#### 3.4. **Copiar al portapapeles**

* Usar `navigator.clipboard.writeText()` con validación de disponibilidad.

#### 3.5. **Recargar entrada**

* Botón que vuelve a escribir en el input el valor original correspondiente.

---

### 4. **Buenas Prácticas**

* Separación de lógica y UI.
* Eventos bien encapsulados.
* Evitar efectos colaterales en global scope.
* Modularidad del código (incluso sin módulos ES6, usar funciones separadas y claras).
* Accesibilidad básica (etiquetas `<label>`, roles si aplica).
* Feedback visual de acciones (copiado exitoso, etc).

---

## ❓Preguntas necesarias antes de comenzar

1. **¿Debe la web tener algún estilo visual concreto o debe limitarse a algo funcional?**

   > Si quieres algo visualmente más atractivo, puedo incluir TailwindCSS o algún diseño básico CSS.

2. **¿Quieres que la web sea responsive?**

   > En caso afirmativo, puedo diseñarla pensando en móvil/escritorio.

3. **¿Quieres que empaquete el proyecto para producción?**

   > Por ejemplo, usar Vite o algún bundler, aunque sea solo JS puro.

4. **¿El botón “copiar” copia el texto invertido o el original?**

   > Presumo que el **invertido**, pero prefiero confirmar.

5. **¿Hay límite de elementos en el historial?**

   > Por ejemplo, ¿debe mantener solo los últimos 10, o sin límite mientras dure la sesión?

---

¿Te gustaría que ahora pase a escribir el código completo o prefieres revisar esta especificación antes de avanzar?

# Nuevo Chat Prompt 2
Lo ideal es que la web tenga el estilo visual más atractivo posible. Queremos entregar el mejor producto posible.

Si podemos hacer la web responsive, mejor.

Utiliza Javascript puro.

El botón copiar copia el texto invertido, efectivamente.

Respecto al límite del historial, utiliza lo que consideres mejor.  

# Salida Nuevo Chat Prompt 2
Perfecto, Miguel Ángel. A continuación te presento una **revisión final mejorada** de la especificación técnica para la aplicación **“Reverse String ES”**, incorporando todas las optimizaciones, mejoras de experiencia de usuario, diseño, accesibilidad y robustez en JavaScript puro. He validado cada apartado para maximizar calidad, claridad y facilidad de mantenimiento.

---

# ✅ ESPECIFICACIÓN TÉCNICA FINAL – REVERSE STRING ES

---

## 🎯 OBJETIVO

Diseñar una aplicación web responsive, moderna y sin dependencias externas que:

* Invierta cadenas de texto introducidas por el usuario.
* Permita el uso de un **modo automático** de inversión.
* Mantenga un historial en **memoria temporal (JS)**.
* Ofrezca una experiencia de usuario fluida, visualmente atractiva y accesible.

---

## 🛠️ TECNOLOGÍAS

* **HTML5**, **CSS3** (responsive, con enfoque en diseño UI/UX moderno)
* **JavaScript puro**

---

## 🧩 COMPONENTES

### 🔷 1. **Header (Cabecera)**

* Título: `Reverse String ES`
* Subtítulo: breve descripción (ej. *“Invierte tus cadenas de texto en un clic”*)

---

### 🔷 2. **Área principal de interacción**

#### 📝 Input

* Campo de texto (`<input type="text">`) con `autofocus`, `maxlength`, y accesibilidad (`aria-label`, `placeholder`, `title`).

#### ⚡ Checkbox: "Modo automático"

* Si está activado:

  * Invierte dinámicamente al escribir.
  * Se oculta el botón de inversión.
* Si está desactivado:

  * Muestra botón “Invertir”.

#### 🔁 Resultado

* Área donde se muestra la cadena invertida.
* Animación ligera al cambiar (ej. fade-in o cambio de color suave).

#### 📋 Botón “Copiar”

* Solo se habilita si hay un texto invertido.
* Copia la cadena invertida al portapapeles.
* Añade la entrada al historial.
* Muestra feedback temporal visual (ej. “✅ Copiado”).

---

### 🔷 3. **Historial de cadenas invertidas**

#### ✔️ Características

* Lista tipo tarjeta (`<ul>` o `<div class="list">`).
* Cada entrada incluye:

  * Texto invertido (`<code>` o `<span class="inverted">`)
  * Botón "📋 Copiar"
  * Botón "🔁 Usar"
  * Indicador `⚡` si fue generado en modo automático (con `title` explicativo)

#### ♻️ Lógica

* Añade entrada solo al pulsar “Copiar”
* **Historial en memoria RAM JS (no localStorage)**
* Límite recomendado: **20 entradas** (FIFO)
* Duplica solo si la cadena original difiere (evitar duplicados consecutivos)

---

### 🔷 4. **Estilo visual y diseño responsive**

#### 🎨 Diseño moderno

* **Tipografía:** `Inter`, `Roboto`, `system-ui`
* **Paleta de color:** fondo claro (#f9fafb), acentos en azul/morado (#6366f1 o #4f46e5)
* **Botones con**: `border-radius`, `box-shadow`, `hover`, y `focus` accesibles
* **Historial en tarjetas** con separación y consistencia visual

#### 📱 Responsividad

* Layout en `flex`/`grid`
* Columnas separadas en pantallas grandes:

  * Input + Resultado a la izquierda
  * Historial a la derecha
* Vista apilada en móviles

---

## ⚙️ FUNCIONALIDAD (JS)

### 🔄 Lógica

#### 📌 Estructura de historial

```js
{
  original: "AI4Devs",
  reversed: "sveD4IA",
  autoMode: true,
  timestamp: 1716555559000
}
```

#### 🔧 Funciones clave

| Función                    | Descripción                           |
| -------------------------- | ------------------------------------- |
| `reverseString(str)`       | Invierte el texto                     |
| `updateOutput()`           | Muestra resultado                     |
| `renderHistory()`          | Dibuja la lista                       |
| `copyToClipboard(text)`    | Usa `navigator.clipboard.writeText()` |
| `addToHistory(entry)`      | Añade entrada al historial            |
| `reloadOriginal(original)` | Vuelve a colocar el texto en el input |
| `truncateHistory()`        | Asegura máximo de 20 entradas         |

---

### 📡 Eventos

* `input`: si modo automático, actualiza resultado en tiempo real.
* `click` en botón "Invertir": solo si no está en modo automático.
* `click` en "Copiar": guarda historial y muestra feedback.
* `click` en "Usar": carga cadena original en input.
* `change` en checkbox: activa/desactiva el modo automático.

---

## ✅ MEJORAS Y DETALLES AÑADIDOS

| Mejora                                                         | Justificación                            |
| -------------------------------------------------------------- | ---------------------------------------- |
| Feedback visual al copiar (con timeout)                        | Mejora UX y confirma la acción           |
| Historial con timestamps ocultos (si se desea ordenar/filtrar) | Escalable                                |
| Prevención de duplicados consecutivos en historial             | Evita ruido innecesario                  |
| Animación ligera al mostrar nuevo resultado                    | Sensación de fluidez                     |
| Validaciones de input (`maxlength`, sanitización básica)       | Robustez frente a errores                |
| Accesibilidad (`aria-labels`, focus ring visible)              | Inclusivo para usuarios con discapacidad |
| Control de botones (disable si no aplica)                      | Mejora de flujo                          |

---


¿Quieres que ahora cree el código completo (HTML, CSS y JS) siguiendo esta especificación en un único archivo, o prefieres que lo separe en partes estructuradas?

También puedo prepararte una demo visual directamente o un ZIP descargable si lo necesitas para entrega.
