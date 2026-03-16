let texto=document.querySelector("#texto")
document.querySelector("#rojo").addEventListener("click",function(){
    texto.className="rojo"
})
document.querySelector("#verde").addEventListener("click",function(){
    texto.className="verde"
})
document.querySelector("#azul").addEventListener("click",function(){
    texto.className="azul"
})