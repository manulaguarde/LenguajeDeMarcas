for(let i=0;i<14;i++){
    let num=Math.floor(Math.random() *3)+1
    if(num===3){
        document.writeln("X<br>")
    }else{
        document.writeln(num+"<br>")
    }
}
document.writeln("Partido 15: ")
for(let i=0;i<2;i++){
    let num1=Math.floor(Math.random()*4)
    if (num1===3 && i===0){
        document.writeln("M-")
    }
    else if(num1===3&&i===1){
        document.writeln("M")

    }else if(num1!==3&&i===0)
        document.writeln(num1+"-")
    else
        document.writeln(num1)
}
