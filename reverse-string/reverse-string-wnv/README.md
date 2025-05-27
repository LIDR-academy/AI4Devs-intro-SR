# Reverse String App

## Descripción

Este proyecto es una aplicación web simple que permite invertir cadenas de texto. La aplicación proporciona un campo de entrada para que el usuario ingrese una cadena, un botón para invertirla, y un historial de todas las cadenas invertidas previamente. Además, incluye un "modo automático" que invierte la cadena a medida que el usuario escribe.

### Funcionalidades

1. **Entrada de texto**: Permite al usuario ingresar una cadena para invertir.
2. **Botón de invertir**: Al hacer clic, la cadena de texto se invierte y se agrega al historial.
3. **Modo automático**: Si está activado, la cadena se invierte automáticamente a medida que el usuario escribe.
4. **Historial de cadenas invertidas**: Muestra todas las cadenas invertidas, con botones para:
   - Copiar la cadena al portapapeles.
   - Cargar una cadena de nuevo al campo de entrada.
5. **Diseño minimalista**: La aplicación tiene un diseño limpio y atractivo, con un estilo centrado y botones claros.

## Tecnologías

- **HTML5**: Para la estructura de la página.
- **CSS3**: Para los estilos de la aplicación.
- **JavaScript** (con módulos ES6): Para la lógica de inversión de cadenas, manipulación del DOM y manejo del historial.
- **Jest**: Para las pruebas unitarias de la lógica de inversión de cadenas.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

/reverse-string-wnv
│
├── /node_modules/                # Módulos de Node.js
├── reverseString.test.js     # Pruebas unitarias para reverseString
├── index.html                    # Página principal
├── script.js                     # Lógica de inversión de cadenas
├── history.js                    # Lógica de manejo del historial
├── styles.css                    # Estilos de la aplicación
├── package.json                  # Configuración del proyecto
└── jest.config.js                # Configuración de Jest


## Instalación y Puesta en Marcha

### 1. Clonar el repositorio

Primero, clona el repositorio en tu máquina local.

```bash
git clone https://github.com/tu-usuario/reverse-string-app.git
ve a -> reverse-string-wnv
```

### 2. Instalar dependencias

Este proyecto usa `npm` para gestionar las dependencias. Instala las dependencias necesarias:

```bash
npm install
```

### 3. Levantar un servidor local

Para ejecutar la aplicación en tu navegador y evitar problemas de CORS con archivos locales, necesitas levantar un servidor web local.

#### Usar `http-server`:

1. Instala `http-server` globalmente si no lo tienes:

   ```bash
   npm install -g http-server
    ```

2. En el directorio del proyecto, ejecuta:

    ```bash
    http-server
    ```

### 4. Ejecutar las pruebas

El proyecto usa **Jest** para las pruebas unitarias. Puedes ejecutar las pruebas con:

```bash
npm test

