## Chatbot utilizado

### Chatbot: Claude

### Model: Claude Sonnet 4

---

## Prompts

### Prompt 1

Crea una página web con lógica en JavaScript que invierta el orden de una cadena de texto.

**Extras obligatorios:**

- Muestra una lista debajo del input con todas las cadenas invertidas anteriormente.
- Cada entrada debe tener:
  - Un botón para copiar al portapapeles.
  - Un botón para volver a cargar esa cadena en el input.
  - Un check de modo automático activado. Si está chequeado, la app automáticamente va reversando la cadena y sólo pasa a la historia cuando el usuario da click en el botón “Copiar”.
- El historial se guarda en memoria (JS), no en localStorage.

---

### Prompt 2

¿Puedes separar el código en un fichero HTML y otro JS con el script?

---

### Prompt 3

El check del "Modo automático" no funciona cuando hago click en el ícono. Solo funciona cuando hago click en el texto.

---

### Prompt 4

El botón "Copiar" para enviar al portapapeles no se ve. Únicamente aparece un texto cuando hago hover en la cadena de texto invertida.

> ⚠️ **Hice retry porque los cambios introducidos rompían la funcionalidad.**

---

### Prompt 5

Buen trabajo.  
Un último cambio: Cuando presiono enter después de introducir una cadena de texto se copia directamente al portapapeles. Quiero que solo se copie al portapapeles cuando hago click en el botón de "Copiar".

---

### Prompt 6

Disculpa. No me he explicado bien en el anterior prompt.  
Lo que en realidad quiero es que una cadena de texto se añada al historial únicamente cuando hago click en el botón de "Copiar".
