function agregar(){
    let nota=document.querySelector("#nota").value
    
    if (nota < 1 || nota > 10 || isNaN(nota)) {
        alert("Introduce una nota entre 1 y 10");
        return;
    }
    let li=document.createElement("li")
    li.textContent=nota
    document.querySelector("#listaNotas").appendChild(li)
    if(nota>=5){
        li.className="aprobado"
    }else{
        li.className="suspenso"
    }
    
}

