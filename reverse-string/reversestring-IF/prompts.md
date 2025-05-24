#### ChatGPT 4o has been used to complete the exercise

# Initial prompt

# Reverse string app

I have a javascript seed project based on 2 files `index.html` (attached) and `script.js` from which I need to create an application that reverse the typed string. i.e.: if user type `AI4Devs`, it should return `sveD4IA`.

## The main features includes:

- A "Reverse" button that will reverse the content of the text input when clicked (button will disabled when automatic mode is enabled).
- A checkbox to enable/disable "Automatic mode" (should be enable by default). When enabled, the app will automatically (on every key stroke) reverse input text and show it on the output box. When disabled, the app will erase output box, and "Reverse" button will be enabled so that when user clicks on it, the app will generate and show the reversed string on output.
- A "Copy" button: On click, it will copy the output text on user clipboard and generate an entry on history (if the text does not exist in history or it exists but it's not the only nor the first item, put it again on top of the history). Show a success alert when clicked!
- A entry history with 2 functionalities for each entry:
  - the possibility of selecting them to continue with it's edition (should show the original text on text input)
  - the possibility of copy the output on clipboard (show a success alert when clicked)

## The UI

The ui consist of a full height box with a 2rem padding.

### Header section:

On top, fixed, I want the following components (with a vertical gap of 1rem):

- The title of the app (name it: Reverse strinG, and if possible create a cool leading icon that represents what we are building, if added be sure to vertically center them, same height as well), use 2rem as font size (if it's not too big).
- A full width contained text input with "Type some text to reverse" for placeholder (put it some smooth borders with some highlight on hover/focus). Should have a maximum height of 3 rows. In case text is larger should allow vertical scrolling.
- A box containing:
  - A "Reverse" button (put a refresh trailing icon or something with 2 directions arrows). Put some primary styles on it. Should be disabled if text input is empty or automatic mode is enabled.
  - A checkbox to enable/disable automatic mode. It should have "Automatic mode" as label and a title (on hover) that explains how both modes works.
  - Both elements should be aligned vertically on the center and have a 1rem horizontal gap between them.
- The output box should be a full width container with 0.5rem padding. Should have a maximum height of 3 rows. In case output text is larger, it should allow vertical scrolling. When input is empty, output will be as well, add a legend like "Type something above". Should not be editable
- At the bottom of the header, we will have a "Copy button" with secondary styles. It should be disabled if output is empty. On click, it will copy the output text on user clipboard and generate an entry on history (if the text does not exist in history or it exists but it's not the only nor the first item, put it again on top of the history). Show a success alert when clicked!

There should be a border as vertical content separator with bottom padding of 1rem.

### History section:

On top (with a vertical padding of 1rem) there will a legend "Past entries:" (if possible create a cool leading icon that describe the history, if added be sure to vertically center them, they should have the same height though). It must have a font size of 1 rem.

#### Entries

Then, list of all past entries the user has written.

- Entries should be a 100% width container but the text will have a max width of 50% and should show ellipsis to prevent text overflown (full text must be shown on hover). Put a vertical 0.5rem gap between every list item, list item styles as well, bullets will be fine.
- Each entry, when it's container is hovered, must show 2 action buttons at the right of the text (with consistent separation between them and the text).
  - "Copy" button: Will copy the full text on the clipboard.
  - "Edit" button: Will replace user input context with the related text (non reverted)
  - They should be discrete buttons (I meant smooth color and hover styles on them).
- The container must have sufficient height so that when entry action buttons are shown, they do not push other elements. Prevent layout shifting!
- If the height of history section grows in such a manner that they does not vertically fit in screen, the list should allow scroll down to see older entries (at the bottom of the list)

## Technical/additional notes

- Do not use local storage for history. Use just in-memory storage.
- Use semantically correct html. I want smooth styles, nothing too colorful, maybe only the "Reverse" button. Put hover styles on actionable items and pointer cursor if required.
- Would be great to have a separate css file in case styles requires some improvements. Name classes wisely in html so all styles can be easily updated. Using css variables for colors and spaces will help maintenance as well
- Update seed files as needed. Other files can be added if needed
- Use clean code architecture and solid principles

# Respuesta 1:

Perfect, actualicé el `index.html` con todos los elementos que mencionaste. Lo próximo será crear el archivo `styles.css` con los estilos acordes y el `script.js` con la lógica de funcionamiento.

¿Querés que arranque por los estilos o el JavaScript?

File: index.html

# Prompt 2:

El que prefieras, o ambos

# Respuesta 2:

Listo, ya tenés tu app completa con:

- **HTML semántico y organizado** (`index.html`)
- **Estilos suaves y personalizables** con CSS variables (`styles.css`)
- **JS modular y claro**, sin localStorage, con manejo de historia en memoria (`script.js`)

Podés probarlo directamente agregando los archivos `styles.css` y `script.js` junto al `index.html`.

¿Querés que empaquete los tres archivos en un `.zip` o que te genere algún test de funcionalidad?

File: script.js y styles.css
