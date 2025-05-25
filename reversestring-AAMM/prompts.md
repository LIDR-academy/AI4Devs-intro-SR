
## ChatBot Utilizado ChatGPT 4.1

## Primer Prompt
Eres un experto en frontend, utilizando Javascript crea una pagina web implementando logica que invierta el orden de una cadena string 

por ejemplo: si nosotros introducimos 'AI4Devs', el resutlado esperado debe ser 'sveD4IA' utiliza como base el archivo html y creando un script.js  como veas necesario

## Segundo Prompt
a continuacion debemos agregar un par de funciones nuevas

- se debe mostrar un listado de todas las cadenas de texto que se han introducido
- cada una de las entradas del historial debe tener un boton de copiar que copiara la cadena al portapapeles
- un boton de recargar lo que realizara es recargar la cadena correspondiente al input

adicianal a esto la pagina debe tener un checkbox "modo automatico" activo, cuya funcion le indica al sistema que invierta la cadena automaticamente, pero esta cadena solo se guardara en el historial cuando el usuario de click al boton de "invertir"

- el prompt presento un error en las funciones al momento de presionar el boton de invertir este no realiza la funcion de invertir solo guarda en historial

## Prompt de Solución
Con estos ultimos cambios relizados al momento de presionar el boton de invertir los datos guardados no son los invertidos si no que son los originales, verifica las funciones que se han creado para solucionar este detalle

## solucion 
- se agrego al guardado en memoria tanto el valor origial como el valor invertido para que el usuario pueda identificar que valor es el que se ingreso

## aprendizaje 
hay que ser un poco mas especifico en cuanto a los resultados que esperamos para evitar confusion al momento de presentar los resultados

## Prompt Final
Eres un experto en frontend, utilizando Javascript crea una pagina web implementando logica que invierta el orden de una cadena string 

por ejemplo: si nosotros introducimos 'AI4Devs', el resutlado esperado debe ser 'sveD4IA' utiliza como base el archivo html y creando un script.js  como veas necesario

la funcionalidad debe ser la siguiente 

- se debe mostrar un listado de todas las cadenas de texto que se han introducido
- cada una de las entradas del historial debe tener un boton de copiar que copiara la cadena al portapapeles
- un boton de recargar lo que realizara es recargar la cadena correspondiente al input

adicianal a esto la pagina debe tener un checkbox "modo automatico" activo, cuya funcion le indica al sistema que invierta la cadena automaticamente, pero esta cadena solo se guardara en el historial cuando el usuario de click al boton de "invertir"

Aseguradate de que con estos ultimos cambios relizados al momento de presionar el boton de invertir los datos guardados sean tanto el original como el invertido