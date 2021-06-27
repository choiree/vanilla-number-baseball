//console.log("hello, vanilla.");
const startBtn = document.querySelector(".start-btn"),
    jsForm = document.querySelector(".js-form"),
    jsInput = jsForm.querySelector(".js-input"),
    jsLogs = document.querySelector(".logs");

const numbers = [];
for (let n = 0; n < 10; n += 1) {
    numbers.push(n);
}
const answer = [];
for (let n = 0; n < 3; n+= 1){
    const index = Math.floor(Math.random() * numbers.length); //인덱스번호0-9
    answer.push(numbers[index]);
    numbers.splice(index, 1);//뽑힌건 배열에서 제거
}
function startGame(){
    startBtn.classList.add("hide");
    jsForm.classList.add("showing");
}
const tries = [];
function confirmInput(input) {//검사하기
    if(input.length !== 3){
        return alert("3자리 숫자를 입력해주세요.");
    }
    /*if(event.keyCode<48 || event.keyCode>57){
        event.returnValue=false;
     }*/
    return true;
}

function submitClick(event){
    event.preventDefault();
    const value = jsInput.value;//사용자가 입력한 값
    jsInput.value = ''; //다음 입력할때 비워주는 역할
    if (!confirmInput(value)) {
        //조건에 맞지않으면 넘어감
        return;
    }
        //입력값이 다 통과하면 리턴 트루 반환
    if(answer.join('')=== value){
         jsLogs.textContent = `정답입니다♥`;
         return;
         //join() = 문자열로 반환
       }
    if(tries.length >= 9){
           jsLogs.appendChild(document.createTextNode(`10번의 기회가 끝났습니다!`));
          return;
         //append 계속 추가
     }
    
    //스트라이크 볼 체크
    let strike = 0;
    let ball = 0;
    //value는 사용자 입력값 answer 정답 값
    for (let i = 0; i < answer.length; i++){
        const index = value.indexOf(answer[i]);
        //indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환
        //indexOf 는 인덱스의 위치까지 알 수있음!
        if(index > -1){//같은 숫자 존재
            if(index === i){//자리 위치까지 같은지
                strike += 1;
            }else{//자리 위치는 다르면 볼
                ball += 1;
            }
        }
    }
    jsLogs.append(`${value}: ${strike}스트라이크 ${ball} 볼`, document.createElement("br"));
    tries.push(value);
}
function init() {
    console.log(answer);
    startBtn.addEventListener("click", startGame);
    jsForm.addEventListener('submit', submitClick);
}
init();