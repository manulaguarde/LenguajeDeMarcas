function tirarDados(){
    let numeroCaras=parseInt(document.querySelector("#caras").value)
    let numeroDados=parseInt(document.querySelector("#dados").value)

    if(!numeroCaras){ // NaN, undefined, 0 en JS se tratan como un false
        numeroCaras=0
    }
    if(!numeroDados){
        numeroDados=0
    }

    let dados=[]
    let contador=0
    while(contador<numeroDados){
        dados.push(Math.floor(Math.random() * numeroCaras + 1))
        contador++
    }

    //Haríamos algo con los datos. una operacion aritmetica, un cambio de tipo, etc
    if (dados.length == 0){
        /*document.querySelector("#resultado").innerHTML += "<p class=\"dados\">Necesitamos al menos un dado</p>"*/
        let parrafo = document.createElement("p")
        //parrafo.className = "error"
        parrafo.classList.toggle("error")//si no esta la clase la agrega, pero si ya estaba la quita
        parrafo.innerText="Necesitamos al menos un dado"
        let imagen=document.createElement("img")
        imagen.style.width="100px"
        imagen.className="error"
        imagen.srcset="https://comicstores.es/imagenes_grandes/8435747/843574782156.JPG"
        document.querySelector("#resultado").appendChild(parrafo)
        document.querySelector("#resultado").appendChild(imagen)
    }else{
        dados.sort().reverse()

        //let resultado=(Math.random() * numeroCaras + 1)
        //let resultado=parseInt(Math.random() *6 + 1)

        document.querySelector("#resultado").innerHTML += dados +"<br>"
        //document.querySelector("#resultado").innerHTML += parseInt(resultado) +("<br>") //podemos redondear con parseInt
    }
}