//your JS code here. If required.
const answer = document.getElementById('ans');
let str = "";

for(let i=1;i<=100;i++){
	 if(i % 3===0 && i % 5==0){
		str = str + "FizzBuzz "
	}
	else if(i % 3 === 0){
		str = str + "Fizz ";
	}
	else if(i % 5==0){
		str = str+"Buzz "
	}
	else{
		str = str + i + " ";
	}
}
answer.innerText=str;
