**Nombre del chatbot usado:**  
GPT-4-o (OpenAI)

---

Voy a implementar por partes la solución que se pide, para depurarla más fácilmente.

## Prompt 1: Estructura básica

```
Necesito crear una microaplicación en HTML + JavaScript que tenga:
- Un campo de entrada de texto (input)
- Un botón que, al hacer clic, invierta el texto ingresado
- Una lista debajo que muestre el historial de cadenas invertidas durante la sesión (solo memoria, no localStorage).

Por favor genera solo el archivo HTML con estructura básica (no CSS por ahora), incluyendo los elementos mencionados, y dejando los ganchos (clases o IDs) listos para conectar con JavaScript.

Tienes como base el siguiente código:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>    
</head>
<body>
<script src="script.js"></script>
</body>
</html>
```
---

## Prompt 2: Lógica JS para invertir texto y guardar historial

```
Ahora escribe el código JavaScript que:
- Al hacer clic en el botón, toma el texto del input, lo invierte, lo muestra debajo en la lista de historial y guarda ese valor en un array en memoria.
- Cada vez que se agrega una nueva cadena al historial, se actualiza la lista mostrada.

No uses localStorage ni almacenamiento persistente, solo memoria.
```
---

## Prompt 3: Agregar botones extra por entrada del historial

```
Añade a cada entrada de la lista del historial:
- Un botón que copie esa cadena invertida al portapapeles.
- Un botón que recargue esa cadena en el input para poder invertirla de nuevo si se quiere.

Modifícame los archivos HTML y JS anteriores para conseguir esta nueva funcionalidad.
```

---
## Prompt 4: Checkbox de modo automático
```
En cada entrada del historial, agrega un checkbox de modo automático activado. Si está seleccionado, la app invierte automáticamente el texto ingresado, pero solo lo guarda en el historial cuando el usuario hace clic en "copiar".

Nota: El historial debe mantenerse en memoria (JS), no uses localStorage.
```

#### Problemas detectados:

- La inversión automática no funcionaba correctamente cuando una entrada estaba en modo "auto".

- No guardaba en el historial al pulsar "copiar".


## Prompt 5: Corrección del modo automático
```
La funcionalidad implementada del checkbox "auto" no es correcta, me inviertes todo cada vez que añado una letra por lo que no es correcto y en el caso de que algún checkbox "auto" esté seleccionado, entonces tienes que guardar en el historial pulsando en el botón "copiar" del historial y no en el de "revertir" del input.
```

Ahora no invierte automáticamente, pero el botón "copiar" funciona y guarda el valor.

## Prompt 6: Habilitar inversión automática sin interferencias
```
Ahora no me lo invierte con el "auto" y necesito que lo haga, ya funciona la funcionalidad de guardar cuando pulsa en copiar.
```

Me ha creado una funcionalidad extra que no le he pedido, la voy a eliminar.

## Prompt 7: Evitar inversión al pulsar Enter
```
No quiero que al pulsar la tecla intro me lo invierta
```

Se eliminó el siguiente código para evitar inversión con Enter:

```
// Evento keydown para invertir al pulsar Enter
textInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && isAnyAutoModeOn()) {
        e.preventDefault();
        const val = textInput.value;
        if (val) {
            const inverted = reverseString(val);
            lastInvertedValue = inverted;
            textInput.value = inverted;
        }
    }
});
```

## Prompt 8: Problemas al invertir varias palabras con pausas y espacios
```
Hay un problema al escribir varias palabras haciendo paradas entre ellas, ya que por ejemplo escribo hola y lo invierte aloh pero luego escribo mundo y me pone odnum hola, mientras debería ser odnum aloh, y que con los espacios tampoco se invierta.
```

## Prompt 9: Problema con orden de palabras invertidas y evitar guardar cadenas vacías
```
Ahora invierte bien las palabras pero no me las pone en el orden correcto ya que la primera palabra que escribo debe aparecer la última y la última la primera, luego si está vacío y le doy a copiar que no me ponga una entrada vacía en el historial
```

## Prompt 10: Evitar copiado o aviso al intentar copiar cadena vacía
```
No invierte correctamente las palabras y "si intentas copiar una entrada vacía, te avisa y no la agrega al historial" prefiero que no la copie ni avise, y al borrar el input y volver a escribir ni invierte la palabra ni las palabras.
```

## Prompt 11: Problema final con inversión incorrecta cuando escribo todo seguido
```
Si pongo que tal estas, me pone euq lat satse y debería ser satse lat euq, esto ocurre en el caso de que lo escriba todo seguido y de forma con el "auto". Y le paso el código de HTML y JS de la app.
```

## Solución definitiva
Después de varios intentos, descubrí que:

- El problema era que se invertía dos veces la palabra junto con los espacios, y sin ellos tampoco lo hacía bien.

- La lógica debía manejar la inversión internamente sin mostrarla directamente en la vista del usuario mientras escribe.

```
Cuando pongo el espacio quiero que me simules por detrás que lo inviertas pero no quiero verlo en el input
```

## Extra: Estilos CSS
```
Crea un CSS moderno, limpio y accesible para esta app. Usa colores con buen contraste, tipografía legible, estilos claros para focus y hover en botones e inputs, diseño responsivo con flexbox o grid, y transiciones suaves. No cambies el HTML, solo el CSS.
```

## Conclusión
La práctica me ha enseñado que:
- Hay que detallar muy bien la descripción de los problemas y los comportamientos esperados, incluyendo ejemplos claros de entradas y salidas.
- Cuando aparecen errores, detallar exactamente qué está fallando y qué debería ocurrir facilita mucho la corrección.
- Hay que pensar en posibles soluciones para resolver el problema y dárselos a la IA para que los implemente.