const form=document.querySelector("#singupForm")
const result = document.querySelector("result")
form.addEventListener("sumbit",function(event){
    event.preventDefault()

    result.innerHTML=""
    if (validateForm()){
        result.innerHTML="Form is valid"
        result.className="ok"
    }else{
        result.innerHTML = "Please fix the errors"
        result.className= "error"
    }
})

function validateForm(){
    return false
}