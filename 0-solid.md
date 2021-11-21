¿Que son los principios Solid?
=====
Es una serie de cinco reglas o principios que son aplicados en la POO cuyas iniciales dan como resultado el acrónimo SOLID este nombre es definido por Michael Feathers el cual hace referencia a los principios definidos por Robert C. Martín (Tío Bob) y Barbara Liskov.

¿Qué es la cohesión?
======
La cohesión en términos de informática se refiere al grado en que diferentes elementos de un mismo sistema permanecen unidos generando un elemento mayor. Podríamos verlo como una clase que integra varios métodos y cada uno de estos métodos está relacionado entre sí, teniendo una “temática” común.

¿Qué es el acoplamiento?
=======
El acoplamiento es el grado en que todos estos elementos se relacionan entre sí. Entre mayor sean las relaciones o dependencias mayor grado de acoplamiento tendremos.


S — Single-responsibility principle (Principio de responsabilidad única)

SOLO POR QUE PUEDAS NO SIGNIFICA QUE DEBAS

Una clase o función solo debe tener una razón para cambiar.

O — Open-closed principle (Principio de abierto cerrado)

Los objetos o entidades deben estar abiertos para la extensión, pero cerrados para la modificación.

L — Liskov substitution principle (Principio de sustitución Liskov)
Sea q(x) una propiedad demostrable sobre objetos de x de tipo T. Entonces q(y) debería ser demostrable para objetos y de tipo S donde S es un subtipo de T.

En palabras más simples, el principio nos dice: si estás usando una clase y esta es extendida, debes de poder utilizar cualquier clase hija, y que la aplicación siga funcionando sin problemas, o mejor aún, que las pruebas del padre sigan siendo válidas…

I — Interface segregation principle (Principio de segregación de interfaz)

Los clientes no deben ser forzados a depender de los métodos que no utilizan.

Nos dice que ninguna clase debería depender de métodos que no usa, cuando creamos clases, es importante que las interfaces que se implementen, SIEMPRE se van a ocupar, y que también, se puedan agregar nuevos comportamientos a todos los métodos.

D — Dependency Inversion Principle (Principio de inversión de dependencia)

A. Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones.
B. Las abstracciones no deben depender de los detalles. Los detalles deben depender de las abstracciones.

