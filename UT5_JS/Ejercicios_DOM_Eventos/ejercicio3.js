document.querySelector("#boton").addEventListener("click",function(){
    let nombre=document.querySelector("#texto").value
    let numero=document.querySelector("#numero").value
    let password=document.querySelector("#password").value
    let fecha=document.querySelector("#fecha").value
    let hora=document.querySelector("#hora").value
    let radio=document.querySelector("#radio").checked
    let checkbox=document.querySelector("#check").checked
    let option=document.querySelector("#option").value
    let mensaje=("TEXTO: "+nombre+
        "\nNÚMERO: "+numero+
        "\nPASSWORD: "+password+
        "\nFECHA: "+fecha+
        "\nHORA: "+hora+
        "\nRADIO: "+radio+
        "\nCHECK: "+checkbox+
        "\nSELECT: "+option);
    alert(mensaje)
})