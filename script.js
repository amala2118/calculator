function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
let num1=0,num2=0,operator='';
let state="";


function operate(operator,a,b){
    let x;
    switch (operator) {
        case "+":
            x=add(a,b);
            break;
        case "-":
            x=subtract(a,b);
            break;
        case "*":
            x=multiply(a,b);
            break;
        case "/":
            x= divide(a,b);
            break;
    }
    return x;
}

const text = document.querySelector('.text');
const subtext=document.querySelector('.subtext');
const operators=document.querySelectorAll('.operator');
const num=document.querySelectorAll('.number');


num.forEach((num)=>{
    num.addEventListener('click',()=>{
        if(state=='active'){text.innerText=""; state="";}
        text.innerText+=num.innerText;
    })
})

operators.forEach((operators)=>{
    operators.addEventListener('click',()=>{
        if(operators.innerText!=='=' && state==""){
        operator=operators.innerText;
        num1=Number(text.innerText);
        state="active";
        subtext.innerText=`${num1} ${operator}`;
        }
        
        else if(operators.innerText=="="){
            num2=Number(text.innerText);
            subtext.innerText=`${num1} ${operator} ${num2} =`;
            num1=operate(operator,num1,num2);
            text.innerText=num1;
            
        }


    })
})

const ac=document.getElementById('ac');
ac.addEventListener('click',()=>{
    num1=0;
    num2=0;
    operator='';
    text.innerText="";
    subtext.innerText="";
    state="";
})

const del=document.getElementById('del');
del.addEventListener('click',()=>{
    text.innerText=text.innerText.slice(0,-1);
})