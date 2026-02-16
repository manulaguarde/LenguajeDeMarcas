alert("Hola")

let acepta=confirm("¿aceptas?")
if(acepta){
    document.writeln("Aceptaste.")
}else{
    let respuesta=prompt("¿Porque no?")
    if(respuesta){
        document.writeln(respuesta)
    }else{
        alert("Vaya")
    }
}