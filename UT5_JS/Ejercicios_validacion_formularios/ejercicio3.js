let asunto=document.querySelector("#asunto")
document.addEventListener("change", function(){
    let valor=asunto.value
    if(valor=="estado"){
        document.querySelector("#num-solicitud").style.display="block"
    }else{
        document.querySelector("#num-solicitud").style.display="none"
    }
})

    