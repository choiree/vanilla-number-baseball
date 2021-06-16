//console.log("hello, vanilla.");
const startBtn = document.querySelector(".start-btn"),
    jsForm = document.querySelector(".js-form"),
    jsInput = jsForm.querySelector(".js-input")

function randomNumber(){
   
    const randNum = Math.floor(Math.random() * 10);
    const randNum2 = Math.floor(Math.random() * 10);
    const randNum3 = Math.floor(Math.random() * 10);
    
    if(randNum!==randNum2 && randNum2!==randNum3 && randNum!==randNum3){
       // event.preventDefault();
        const numArray = [randNum, randNum2, randNum3];
        console.log(numArray);
        jsForm.classList.add("showing");
        startBtn.classList.add("hide");
        inputSubmit();
        }else{
        alert("다시");
    }
    
}

function  inputSubmit(e){
    e.preventDefault();
    const a = jsInput.nodeValue;
    console.log("a");
}

function init(){
    startBtn.addEventListener("click", randomNumber);
}
init();