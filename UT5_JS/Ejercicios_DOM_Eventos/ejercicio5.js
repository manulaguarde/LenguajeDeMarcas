let posicion=0

function clickAbajo (){
    if (posicion<3) {
        let casilla=document.querySelectorAll(".opcion")
        casilla[posicion].classList.remove("seleccionada")
        casilla[posicion+1].classList.add("seleccionada")
        posicion+=1
        
        
    }
}

function clickArriba (){
    let casilla=document.querySelectorAll(".opcion")
    casilla[posicion-1].classList.add("seleccionada")
    casilla[posicion].classList.remove("seleccionada")
    posicion-=1
}

function calcular(){
    document.querySelector("#resultado").value=""
    if (posicion===0){  
        let num=parseInt(document.querySelector("#numero-in").value) 
        if(num%2===0){
            document.querySelector("#resultado").value="Si"
        }
        else{
            document.querySelector("#resultado").value="No"
        }
    }else if(posicion===1){
        let num=parseInt(document.querySelector("#numero-in").value)
        if(num%2!==0){
            document.querySelector("#resultado").value="Si"
        }
        else{
            document.querySelector("#resultado").value="No"
        }
    }else if(posicion===2){
        let num=parseInt(document.querySelector("#numero-in").value)
        let cont=0
        for (let index = 1; index <= num/2; index++) {
            if(num%index===0){
                cont+=1
            }
        }
        if(cont===1){
            document.querySelector("#resultado").value="Si"
        }else{
            document.querySelector("#resultado").value="No"
        }
    }else if(posicion===3){
                let num=parseInt(document.querySelector("#numero-in").value)
        let cont=0
        for (let index = 1; index <= num/2; index++) {
            if(num%index===0){
                document.querySelector("#resultado").value+=index+", "
            }
        }
    }
}