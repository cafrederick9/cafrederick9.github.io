function check(){
	var c=0;
	var q1=document.quiz.question1.value;
	var q2=document.quiz.question2.value;
	var q3=document.quiz.question3.value;
	var q4=document.quiz.question4.value;
	var result=document.getElementById("result");
	var quiz=document.getElementById("quiz");
	
	if(q1 == "Lexington") {c++}
	
	if(q2 == "Football") {c++}
	
	if(q3 == "Northern Kentucky University") {c++}
	
	if(q4 == "Fifa 19") {c++}
	
	quiz.style.display="none"
	
	if (c=0){
		result.textContent='Your result is 0. You do not know me well :( You should try reading the content on my website again and try again.'
	}
	else if (c=1){
		result.textContent='Your result is 1. You do not know me well :( You should try reading the content on my website again and try again.'
	}
	else if (c=2){
		result.textContent='Your result is 2. You do not know me well :( You should try reading the content on my website again and try again.'
	}
	else if (c=3){
		result.textContent="Your result is 3. You know me well! I'm impressed :)"
	}
	else if (c=4){
		result.textContent="Your result is 4. You know me well! I'm impressed :)"
	}
	
}