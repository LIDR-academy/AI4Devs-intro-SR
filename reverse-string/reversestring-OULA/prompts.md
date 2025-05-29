## Prompt de Desarrollo

Quiero que actúes como un **desarrollador de JavaScript con experiencia en algoritmos de cadenas de texto**.

Necesito que desarrolles un pequeño ejemplo utilizando HTML y JavaScript distribuido en dos archivos: `index.html` y `scripts.js`. El objetivo es crear una aplicación que permita invertir una cadena de texto y mostrar resultados interactivos.

### Requisitos funcionales

1. **Entrada de texto**:
    - Un campo de entrada (`<input>`) para que el usuario escriba una cadena de texto.

2. **Mostrar reverso**:
    - El texto invertido debe mostrarse en pantalla al procesarlo.

3. **Historial de cadenas**:
    - Debe mantenerse un historial de las cadenas procesadas.
    - No debe usarse `localStorage`; solo se debe usar la **memoria de ejecución**.

4. **Botón de copiar**:
    - Un botón debajo del campo de entrada que permita copiar la cadena invertida al portapapeles.

5. **Persistencia condicional**:
    - Solo se guarda la cadena en el historial **cuando el usuario da clic en el botón de copiar**.

6. **Recargar desde historial**:
    - Incluir un botón por cada entrada del historial para volver a cargar esa cadena en el campo de entrada.

7. **Modo automático**:
    - Incluir un `checkbox` para activar/desactivar un **modo automático**.
    - Si está activado, el campo de resultado debe actualizarse **en tiempo real** mientras se escribe.

### Estructura del proyecto

El proyecto debe tener la siguiente estructura:

reversestring-OULA
├── index.html
└── scripts.js

Además, asegúrate de que la carpeta original llamada `template` sea **renombrada a `reversestring-OULA`**.