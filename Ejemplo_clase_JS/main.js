let fecha=new Date()
document.writeln(fecha)
let dia= fecha.getDay()


switch (dia){
    case 1:
        document.writeln("Lunes")
        break
    case 2:
        document.writeln("Martes")
        break
    case 3:
        document.writeln("Miercoles")
        break
    case 4:
        document.writeln("Jueves")
        break
    case 5:
        document.writeln("Viernes")
        break
    case 6:
        document.writeln("Sabado")
        break
    case 7:
        document.writeln("Dommingo")
        break
    default:
        document.writeln("Este dia no existe")
        break
}

let numero= Math.floor((Math.random()*10)+1)

while(numero!=3){
    document.writeln("Busco 3")
    numero= Math.floor((Math.random()*10)+1)
}
document.writeln("encontrado")
document.writeln("<br>")

for (let index = 0; index < 10; index++) {
    let numero=index+1
    document.writeln(numero)
    document.writeln("<br>")
    
}

let palabra="prueba"
for (const letra in palabra) {
    document.writeln("<br>"+palabra[letra])
}