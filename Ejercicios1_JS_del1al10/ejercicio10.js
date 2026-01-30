let cont=0
let num
do{
    num=Math.floor(Math.random()*1001)+1
    cont++
}while(num!==666)

document.writeln(num+" Encontrado!!! Tardo: "+cont)