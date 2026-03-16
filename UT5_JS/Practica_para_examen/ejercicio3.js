
function agregar(){
    let li=document.createElement("li")
    let tarea=document.querySelector("#tarea").value
    li.textContent=tarea

    document.querySelector("#lista").appendChild(li)
    document.querySelector("#tarea").value=""
    li.addEventListener("click", function(){
        li.remove()
    })
}