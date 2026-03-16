function agregar(){
    let tarea=document.querySelector("#tarea").value
    let li=document.createElement("li")
    li.textContent=tarea
    document.querySelector("#lista").appendChild(li)
    li.addEventListener("click",function(){
        li.classList.toggle("completada")
    })
    document.querySelector("#tarea").value=""
}