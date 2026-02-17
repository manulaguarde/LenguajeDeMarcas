document.querySelector("#btnTexto").addEventListener("click", function(){
    let textoIntroducido=document.querySelector("#texto").value
    document.querySelector("p").innerHTML=textoIntroducido
})

document.querySelector("#btnColorFondo").addEventListener("click", function(){
    let colorFondo=document.querySelector("#colorFondo").value
    document.querySelector(".texto-cuadro").style.background=colorFondo
})

document.querySelector("#btnColorBorde").addEventListener("click", function(){
    let colorBorde=document.querySelector("#colorBorde").value
    document.querySelector(".texto-cuadro").style.borderColor=colorBorde
})

document.querySelector("#btnColorTexto").addEventListener("click", function(){
    let colorTexto=document.querySelector("#colorTexto").value
    document.querySelector(".texto-cuadro p").style.color=colorTexto
})