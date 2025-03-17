let input = document.querySelector("input")

function addvalue(elementval){
    input.value+=elementval
}
function clearval(){
    input.value = ""
}
function deleteCharacter(){
    input.value = input.value.slice(0,input.value.length-1)
}
function evaluateVal(){
    input.value = eval(input.value)
}













































