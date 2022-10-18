const textEl=document.getElementById("charinp");
const countEl=document.getElementById("count");
const remaining=document.getElementById("remaining");
textEl.addEventListener("keyup",()=>{
updateCounter();
})

function updateCounter(){
countEl.innerText=textEl.value.length;
countEl.innerText=parseInt(countEl.innerText,10);
remaining.innerText = 50- countEl.innerText;
}