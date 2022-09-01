const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

let h1 = document.querySelector("h1");
const formEl=document.getElementById("form");
const inputEl=document.getElementById("input");
const scoreEl=document.getElementById("score");
let score=JSON.parse(localStorage.getItem("score"));
h1.innerText=`What is ${num1} multiply by ${num2}`;
if(!score){
    score=0;
}
scoreEl.innerText=`score:${score}`;
const correctAns=num1*num2;
formEl.addEventListener("submit",()=>{
const userAns = +inputEl.value;
if(userAns === correctAns){
    score++;
    updateLocalstorage();
 
}else{
    score--;
    updateLocalstorage();
    
}
})
function updateLocalstorage(){
    localStorage.setItem("score",JSON.stringify(score));
}