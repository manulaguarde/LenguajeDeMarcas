document.querySelector("#suma").addEventListener("click",function(){
    let num1=Number(document.querySelector("#num1").value)
    let num2=Number(document.querySelector("#num2").value)

    document.querySelector("#resultado").value=num1+num2
})

document.querySelector("#resta").addEventListener("click",function(){
    let num1=Number(document.querySelector("#num1").value)
    let num2=Number(document.querySelector("#num2").value)

    document.querySelector("#resultado").value=num1-num2
})

document.querySelector("#multiplica").addEventListener("click",function(){
    let num1=Number(document.querySelector("#num1").value)
    let num2=Number(document.querySelector("#num2").value)

    document.querySelector("#resultado").value=num1*num2
})

document.querySelector("#divide").addEventListener("click",function(){
    let num1=Number(document.querySelector("#num1").value)
    let num2=Number(document.querySelector("#num2").value)

    document.querySelector("#resultado").value=num1/num2
})

document.querySelector("#limpia").addEventListener("click",function(){
    document.querySelector("#num1").value=""
    document.querySelector("#num2").value=""

    document.querySelector("#resultado").value=""
})