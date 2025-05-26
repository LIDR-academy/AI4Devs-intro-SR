# Propts

## CHATGPT 

### 1er prompt (sin los extras)
Eres un desarrollador especializado en Javascript y HTML.

Crea una aplicación usando HTML y Javascript en la cual el usuario pueda escribir una cadena de caracteres y al pulsar un botón que se gire la cadena. Por ejemplo: Si el usuario escribe "Hello, welcome to AI4DEVS" al pulsar el botón tiene que aparecer "SVED4IA ot emoclew ,olleH".

Esta es la lista de requisitos mínimos funcionales y visuales de la aplicación
Funcionales:
1. Tiene que haber un input de texto en el que el usuario pueda introducir su cadena
2. Debajo del input estará el botón el cual ha de pulsar el usuario para Revertir la cadena.
3. Debajo de ese botón habrá una lista con todas las cadenas que ha revertido el usuario.
4. No se ha de almacenar ni en el localStorage ni en el sessionStorage, usa solo la memoria de js.
5. Quiero que esté dividido correctamente todo en un index.html y en un script.js.

Visuales:
No uses los estilos basicos de HTML, quiero un estilo simple pero agradable a la vista, con un título en negrita "Reverse string", un input de texto agradable con los bordes redondeados. El botón quiero que sea azul y que su texto sea "Reverse 🔄️". 


### 2º prompt (extras)

En base al mismo código que has generado quiero realizar ciertas modificaciones extra.

Cada una de las entradas del historial de strings revertidas por el usuario quiero que tengan dos botones asociados.

1. El primer botón servirá para copiar al portapapeles esa entrada del historial.
2. El segundo botón servirá para recargar en el input de texto la entrada del historial de la cual hayamos pulsado el botón.

Ambos botones han de ser claros en su función, quiero que cada uno tenga escrito su función. 

Luego, además de estas nuevas funcionalidades quiero añadir un "Modo automático". Este modo se activará con un checkbox, y cuando este checkbox esté activo se revertirá la string que el usuario inserte a cada cambio que realice. La string no se guardará en el historial hasta que el usuario no haga click en el botón de copiar.




### Prompt fallido


En base al mismo código que has generado quiero realizar ciertas modificaciones extra.

Cada una de las entradas del historial de strings revertidas por el usuario quiero que tengan dos botones asociados.

1. El primer botón servirá para copiar al portapapeles esa entrada del historial.
2. El segundo botón servirá para recargar en el input de texto la entrada del historial de la cual hayamos pulsado el botón.

Luego, además de estas nuevas funcionalidades quiero añadir un "Modo automático". Este modo se activará con un checkbox, y cuando este checkbox esté activo se revertirá la string que el usuario inserte a cada cambio que realice. La string no se guardará en el historial hasta que el usuario no haga click en el botón de reverse.

#### No me ha satisfecho del todo el resultado ya que los botones nuevos solo les ha puesto emojis como nombre, y uno de los botones no se entiende del todo bien su función.