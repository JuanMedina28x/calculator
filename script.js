let inputNumbers = document.querySelector("#text-area")
let btnsNumbers = document.getElementsByClassName('number')
let equalButton = document.querySelector('#equal')
let btnsOperators = document.getElementsByClassName("operator")
let clearButton = document.querySelector("#clear")



let expressionToEvaluate = [];
let operatorCounter=0;
let trueOrFalse = false;
let lastValue = 0;


Array.from(btnsNumbers).forEach(function (e) {
e.addEventListener("click", () => {


if (lastValue === Number(inputNumbers.textContent)){
    inputNumbers.textContent = ''
}
inputNumbers.textContent = inputNumbers.textContent + e.textContent;
})})


Array.from(btnsOperators).forEach (function (e){
    e.addEventListener("click", () => {

    
        expressionToEvaluate.push(e.textContent)
        expressionToEvaluate.push((Number(inputNumbers.textContent)))

        if(expressionToEvaluate.length === 4){
            lastValue = operate(expressionToEvaluate[0],expressionToEvaluate[1],expressionToEvaluate[3])
            inputNumbers.textContent = lastValue;
            expressionToEvaluate.splice(0,expressionToEvaluate.length)
            expressionToEvaluate[0] = e.textContent;
            expressionToEvaluate[1] = lastValue;
        } else{

        inputNumbers.textContent = "";
        }
    }
    )
})

equalButton.addEventListener("click", () => {


expressionToEvaluate.push((Number(inputNumbers.textContent)))
inputNumbers.textContent = operate(expressionToEvaluate[0],expressionToEvaluate[1], expressionToEvaluate[2])
lastValue = Number(inputNumbers.textContent)
expressionToEvaluate.splice(0,expressionToEvaluate.length)
})


clearButton.addEventListener("click", () =>{

expressionToEvaluate.splice(0,expressionToEvaluate.length);
inputNumbers.textContent = "";
lastValue = 0;
})
 


const add = function (a,b){
return (a+b);
}

const multiply = function (a,b){
return (a*b)
}

const subtract = function (a,b){
return (a-b);
}

const divide = function (a,b){
return (a/b);
}


const operate = function(op,a,b){
    if(op === '+'){
        return add(a,b)
    }

    else if(op === 'x'){
        return multiply(a,b)
    }

    else if(op === '-'){
        return subtract(a,b)
    }

    else if(op === '/'){
        return divide(a,b)
    }

}
