const form=document.querySelector("#form")
let suma=0
form.addEventListener("submit",function(event){
    event.preventDefault()
    let gastos=document.querySelector("#total-gastos")
    
    if (validateForm()){
    /*let descripcion=document.querySelector("#descripcion").value
    let desc=document.createElement("li")
    desc.textContent=descripcion
    document.querySelector("#lista").appendChild(desc)
    let precio=document.querySelector("#precio").value
    let pr=document.createElement("li")
    pr.textContent=precio
    document.querySelector("#lista").appendChild(pr)
    let categoria=document.querySelector("#categoria").value
    let cat=document.createElement("li")
    cat.textContent=categoria
    document.querySelector("#lista").appendChild(cat)  
    document.querySelector("#descripcion").value=""
    document.querySelector("#precio").value=""
    document.querySelector("#categoria").value=""
    let num=parseFloat(precio)*/
    let descripcion=document.querySelector("#descripcion").value
    let precio=document.querySelector("#precio").value
    let categoria=document.querySelector("#categoria").value
    let li=document.createElement("li")
    li.textContent="Descripción: "+descripcion+" - Precio: "+precio+" - Categoría "+categoria
    document.querySelector("#lista").appendChild(li)
    document.querySelector("#descripcion").value=""
    document.querySelector("#precio").value=""
    document.querySelector("#categoria").value=""
    let num=parseFloat(precio)
    suma=suma+num
    }
    gastos.innerHTML=suma
})

function showError(elemento,mensaje){
    elemento.innerHTML=mensaje
}
function clearError(element){
    element.innerHTML=""
}

function validarDescripcion(){
    let value=""
    let descripcion=document.querySelector("#descripcion").value
    value=descripcion
    if (value==""){
        showError(document.querySelector("#descripcion-error"),"No puede estar vacío")
        return false
    }
    clearError(document.querySelector("#descripcion-error"))
    return true
}

function validarPrecio(){
    let precio=document.querySelector("#precio").value
    let value=""
    value=precio
    if (value==""){
        showError(document.querySelector("#precio-error"),"No puede estar vacío")
        return false
    }
    let num=parseFloat(value)
    if(num<=0){
        showError(document.querySelector("#precio-error"),"El precio no puede ser menor o iugal a 0")
        return false
    }
    clearError(document.querySelector("#precio-error"))
    return true
}

function validarCategoria(){
    let categoria=document.querySelector("#categoria").value
    let value=""
    value=categoria
    if(value==""){
        showError(document.querySelector("#categoria-error"),"No puede estar vacío")
        return false

    }
    clearError(document.querySelector("#categoria-error"))
    return true
}

function validateForm(){
    let okDesc=validarDescripcion()
    let okPrecio=validarPrecio()
    let okCat=validarCategoria()
    return okDesc && okPrecio && okCat
}