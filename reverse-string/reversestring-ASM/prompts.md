Chatgpt versión gratuita.
1. Promtp:
Create a **web page with JavaScript logic that reverses the order of a string**.

Example: if I input AI4Devs, it should return sveD4IA.

Do it using the seed files index.html that I attached and you should create a file "scripts.js" that makes it.

The html file must cointain(I attached a png file if you have doubts):
a bold heading that says "Reverse String"
under, a new line with the input text.
under, a new line with a blue button with white text called "Reverse" with a arrows icon making a circle.
under, a new line with the output text after reverse the input.
under, a new line with a grey button with white text "Copy" with a icon.

That is about design. lest continue about how it works(in spanish):
Muestra una lista debajo del input con todas las cadenas invertidas anteriormente.
Cada entrada debe tener:
Un botón para copiar al portapapeles.
Un botón para volver a cargar esa cadena en el input.
Un check de modo automático activado, si está chequeado, el app automáticamente va reversando la cadena y sólo pasa a la historia cuando el usuario da click en el botón “”copiar”
El historial se guarda en memoria (JS), no en localStorage.

2. Promtp:
Thanks for the code. I've tested and there is a small mistake. Onlye when a click the button "copy" is when the input text must be saved in memory. I say taht because when the buton "auto" is not checked and I click "reverse" buton, it reverses the text(taht's ok) but it moreover (and here is the wrong behaviour) saves the input(and add the new line)

3. Promtp:
Now, I have two new features(in spanish):
El botón debe aparecer cuando haya texto suficiente, más de 3 letras
Que te de la cadena en tiempo real, que no dependa del botón.

