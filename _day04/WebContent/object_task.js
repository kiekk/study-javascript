/**
 * 자동차 주행에 필요한 js 
 */

//flag 변수 -> 시동 여부를 판단해줍니다.
//시동 켜짐 : true
//시동 꺼짐 : false
var check = false;
var count = 0;

//프로토타입
function SuperCar(){
	this.brand = "Ferrari";
	this.color = "Red";
	this.price = 15000;
}

//변수일 때에는 프로토타입명(SuperCar).prototype을 붙여서 접근합니다.
SuperCar.prototype.pw = prompt("자동차 초기 비밀번호 ");

//시동이 이미 켜져있다면 이미 켜져있다는 메세지 출력과 input태그 보이지 않게 하기
//시동이 꺼져있다면 input태그 보이게 하기
//시동 켜기 버튼을 눌렀을 때 호출
//메소드일 때에는 프로토타입명을 붙여서 접근합니다.
SuperCar.showInput = function(){
	if(!check){
		//시동이 꺼져있을 때
		input.style.visibility = "visible";
		input.focus();
	}else {
		//시동이 이미 켜져있을 때
		result.innerHTML = "이미 켜져 있습니다.";
	}
}

//비밀번호 입력했을 때 호출
SuperCar.engineStart = function(){
	//비밀번호 비교, 경찰 출동 여부 판단
	//SuperCar.prototype.pw
	if(SuperCar.prototype.pw == input.value){
		img.src = "./images/시동켜기.gif";
		input.style.visibility = "hidden";
		result.innerHTML = "시동 켜짐";
		count = 0;
		check = true;
	}else {
		count++;
		
		if(count == 3){
			result.innerHTML = "경찰 출동";
			img.src = "./images/경찰.png";
			input.style.visibility = "hidden";
			btnEngineStart.style.display = "none";
			btnEngineStop.style.display = "none";
		}else {
			result.innerHTML = `비밀번호 오류 : ${count}회`;
			input.value = "";
			input.focus();			
		}
	}	
}

//시동끄기 버튼을 눌렀을 때 호출
SuperCar.engineStop = function(){
	//이미 시동이 꺼져있는지 판단
	if(check){
		result.innerHTML = "시동 꺼짐";
		img.src = "./images/시동끄기.gif";
		check = false;
	}else {
		result.innerHTML = "이미 꺼져있습니다."
	}
}

//textarea, input, 이미지 태그 가져오기
const result = document.getElementById("result");
var input = document.getElementById("input");
var img = document.getElementById("img");

//버튼 객체 가져오기
var btnEngineStart = document.getElementById("engineStart");
var btnEngineStop = document.getElementById("engineStop");
var btnEngineReset = document.getElementById("reset");

//이벤트 추가
//input.addEventListener("keypress", activeEnter);
btnEngineStart.addEventListener("click", SuperCar.showInput);
btnEngineStop.addEventListener("click", SuperCar.engineStop);
btnEngineReset.addEventListener("click", () => history.go(0));

//함수
//input태그 엔터키값 확인
function activeEnter(){
	//엔터는 고유 keyCode값이 13입니다.
	//input 태그에서 onkeyup속성을 작성합니다.
	//<input onkeyup="activeEnter()">
	//input태그에서 엔터 입력시 if문 안에 있는 문장이 실행됩니다.
	if(window.event.keyCode == 13){
		//시동켜기
		SuperCar.engineStart();
	}
}

