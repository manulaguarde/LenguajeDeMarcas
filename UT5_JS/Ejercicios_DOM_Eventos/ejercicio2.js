document.querySelector("#copia-a-texto2").addEventListener("click",function(){
    let contenidoTexto1=document.querySelector("#cuadro-texto1").value

    document.querySelector("#cuadro-texto2").value=contenidoTexto1
})

document.querySelector("#copia-a-texto1").addEventListener("click",function(){
    let contenidoTexto1=document.querySelector("#cuadro-texto2").value

    document.querySelector("#cuadro-texto1").value=contenidoTexto1
})

document.querySelector("#limpia-texto1").addEventListener("click",function(){
    
    document.querySelector("#cuadro-texto1").value=""
})

document.querySelector("#limpia-texto2").addEventListener("click",function(){
    
    document.querySelector("#cuadro-texto2").value=""
})
