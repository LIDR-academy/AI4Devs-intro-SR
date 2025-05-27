# Prompt
Modelo: gpt-4o

---

Te paso el HTML base para una app que invierte cadenas y mantiene un historial (en memoria, no localStorage). Sobre esta base quiero que desarrolles la lógica en JS, y también un CSS moderno y accesible.

## HTML base:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Reverse String</title>    
</head>
<body>
<script src="script.js"></script>
</body>
</html>
```

## Funcionalidad general
- Hay un campo de entrada de texto (input).
- Hay un checkbox global llamado “Modo Automático”.
- Hay un botón manual llamado “Invertir”.
- Debajo hay una lista de historial que se guarda sólo en memoria JS (no uses localStorage).

## Cómo funciona el modo automático
- Si el checkbox está activado → cada vez que escribes algo en el input, el texto se invierte automáticamente en tiempo real y se muestra en un área visible (un div o similar), pero no se guarda en el historial aún.

-Si el checkbox está desactivado → escribes el texto, y sólo cuando haces clic en el botón “Invertir” se genera la versión invertida y se muestra en el área visible (pero tampoco se guarda en el historial aún).

## Cómo funciona el historial
El historial solo guarda una cadena invertida cuando haces clic en el botón “Copiar” del resultado visible.

## Flujo típico:

1. Escribes texto.

2. Se invierte (automáticamente o manualmente según modo).

3. Ves el resultado invertido.

4. Haces clic en el botón “Copiar” → se copia el texto al portapapeles y se guarda esa cadena invertida en el historial.

## Qué muestra cada entrada del historial
Cada ítem en la lista de historial debe mostrar:

- El texto invertido.

- Un botón “Copiar” → copia esa cadena invertida al portapapeles.

- Un botón “Recargar” → carga esa cadena invertida nuevamente en el campo de texto para poder editarla o invertirla otra vez.

- No necesita su propio checkbox, ya que el modo automático es global.

## Reglas y UX mejorada
- Si el modo automático está activado, el botón “Invertir” no debe aparecer.

- El botón “Copiar” para el resultado invertido no debe aparecer si no hay texto invertido visible.

- Si el historial está vacío, no mostrar el título “Historial” ni la lista.

- Usa colores con buen contraste, tipografía legible y estilos visibles para focus y hover en botones e inputs.

- El diseño debe ser responsivo usando flexbox o grid.

- Añade transiciones suaves en interacciones.

- El historial y la lista deben manejar correctamente la accesibilidad (atributos aria donde corresponda).

## Entrega esperada
- Código HTML (con los elementos básicos y estructura).

- Código CSS moderno, limpio y accesible (sin cambiar el HTML base, sólo estilos).

- Código JS que implemente toda la lógica descrita, manteniendo el estado en memoria.

Siguiendo toda esta información devuelvemelo los archivos con la solución.

---

He detectado algunas cosas a mejorar por lo que le escribo otro prompt
```text
El titulo resultado no quiero que salga si no contiene nada y una vez pulse en copiar y se vaya al historial quiero dejar limpio el input
```

Otro pequeño detalle más
```
Al pulsar el copiar en el historial muestrame algo que confirme que se ha copiado correctamente
```

Podemos encontrar como fallo o no que nos guarde cadenas iguales en el historial, no es algo que se ha definido en las especificaciones, entendemos que no se pueden guardar cadenas iguales.

```
No quiero que guardes en el historial cadenas iguales
```

## Conclusión
- Comprobar y recopilar todos los requisitos de forma que estén escritos de una forma que no mezcle responsabilidades y deje cosas ambiguas, no podemos copiar y pegar el problema tal cual nos lo dan, sino analizar lo que se quiere hacer y el por qué.
- Estén bien definidos y con ejemplos.
- Explicarle detalladamente las funcionalidades.