let boton=document.querySelector("#btn")

boton.addEventListener("click",function(){
    let texto=document.querySelector("#texto").value
    document.querySelector("#resultado").innerHTML=texto
    document.querySelector("#texto").value=""
})