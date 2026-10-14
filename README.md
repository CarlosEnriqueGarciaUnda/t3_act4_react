# Actividad 4: Introducción a React - Fundamentos y Primer Componente

**Estudiante:** [Tu Nombre Completo]  
**Materia:** Programación Web  

---

## Preguntas y Respuestas

### a) ¿Qué diferencia hay entre props y state en React?
- **Props (Propiedades):** Son parámetros o datos de entrada que un componente padre le pasa a un componente hijo. Son de solo lectura (inmutables), lo que significa que el componente hijo no los puede modificar.
- **State (Estado):** Es la memoria o información interna que vive dentro de un componente. A diferencia de las props, el estado sí se puede modificar mediante su función actualizadora. Cuando el estado cambia, React vuelve a renderizar el componente en la pantalla automáticamente.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?
La propiedad `key` le asigna un identificador único a cada elemento renderizado en una lista. Sirve para que el algoritmo de reconciliación de React sepa exactamente qué elemento ha sido modificado, añadido o eliminado. Esto evita errores visuales de renderizado y mejora el rendimiento de la aplicación.

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.
`useState` es un Hook de React que sirve para declarar variables de estado en componentes funcionales. Devuelve un arreglo con dos elementos: el valor actual del estado y una función para actualizarlo.
**Ejemplo en la aplicación:** Lo usé para controlar el contador de pedidos de café:
`const [pedidos, setPedidos] = useState(0);`
Al presionar el botón "¡Ordenar un café!", ejecuto `setPedidos(pedidos + 1)`, incrementando la cuenta y actualizando la interfaz.

---

## Enlaces del Proyecto

- **Repositorio en GitHub:** https://github.com/CarlosEnriqueGarciaUnda/t3_act4_react
- **Proyecto desplegado en GitHub Pages:** https://CarlosEnriqueGarciaUnda.github.io/t3_act4_react/