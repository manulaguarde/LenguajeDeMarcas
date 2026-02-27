/*
1. Vamos a crear un array que almacene 10 múltiplos de 5 aleatorios entre 0 y 100,
además debe cumplir que el primer elemento no sea menor de 50 y el último no sea
mayor de 50. Para ello seguiremos los siguientes pasos:
· Crea un array de 10 elementos.
· Inicializa el array con múltiplos aleatorios de 5
· Si el primer elemento es menor de 50, lo eliminamos e insertamos otro múltiplo
aleatorio de 5. Esta operación se realizará hasta que el primer elemento sea
mayor o igual que 50
· Si el último elemento es mayor de 50, lo eliminamos e insertamos otro múltiplo
de 5 aleatorio. Esta operación se realizará hasta que el último elemento sea
menor o igual que 50
· Mostraremos el contenido del array en pantalla.
*/

let array = []

for (let i = 0; i < 10; i++) {
  array.push(Math.floor(Math.random() * 21) * 5)
}
while(array[0]<50){
    array[0]=Math.floor(Math.random()*21)*5
}
while(array[9]>50){
    array[9]=Math.floor(Math.random()*21)*5
}

document.writeln(array)

