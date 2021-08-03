let turn=1;
let char="x";
let playground=[
["*","*","*"],["*","*","*"],["*","*","*"]
];

document.querySelector("table").onclick=function(event) {
	if(turn%2==0){
		char=0;
	}
	else{
		char="x";
	}
	let cell=event.target;
	let column = cell.cellIndex;
	let parent=cell.parentElement;
	let row=parent.rowIndex;
	console.dir(parent);
	if(playground[row][column]!="x"&&playground[row][column]!=0){
	cell.innerHTML=char;
	playground[row][column]=char;
	turn=turn+1;
	if (char=="x") {
		cell.classList.add("x");
	}
	else if(char==0){
		cell.classList.add("o");
	}
	if(winner()=="x"){
		console.log("winner X");
		document.querySelector("p").classList.remove("winner");
		document.querySelector("span").innerHTML="x";
		document.querySelector("table").classList.add("hidden");
	}
	else if(winner()==0){
		console.log("winner 0");
		document.querySelector("p").classList.remove("winner");
		document.querySelector("span").innerHTML="0";
		document.querySelector("table").classList.add("hidden");
	}
	else if(winner()=="draw"&&turn==10){
		console.log("draw");
		document.querySelector("p").classList.remove("winner");
		document.querySelector("span").innerHTML="friendship";
		document.querySelector("table").classList.add("hidden");
	}
	}
}






function winner (){
		if (playground[0][0]=="x" &&playground[0][1]=="x"&&playground[0][2]=="x") {
		return"x";
	}
	else if(playground[1][0]=="x"&&playground[1][1]=="x"&&playground[1][2]=="x"){
		return"x";
	}
	else if(playground[2][0]=="x"&&playground[2][1]=="x"&&playground[2][2]=="x"){
	return"x";
	}
	else if(playground[0][0]=="x"&&playground[1][1]=="x"&&playground[2][2]=="x"){
	return"x";
	}
	else if(playground[0][1]=="x"&&playground[1][1]=="x"&&playground[2][1]=="x"){
		return"x";
	}
	else if(playground[0][2]=="x"&&playground[1][1]=="x"&&playground[2][0]=="x") {
	return"x";
	}
	else if(playground[0][0]=="x"&&playground[1][0]=="x"&&playground[2][0]=="x"){
		return"x";
	}
	else if(playground[0][2]=="x"&&playground[1][2]=="x"&&playground[2][2]=="x"){
		return"x";
	}



	if (playground[0][0]==0 &&playground[0][1]==0&&playground[0][2]==0) {
		return 0 ;
	}
	else if(playground[1][0]==0&&playground[1][1]==0&&playground[1][2]==0){
		return 0;
	}
	else if(playground[2][0]==0&&playground[2][1]==0&&playground[2][2]==0){
	return 0 ;
	}
	else if(playground[0][0]==0&&playground[1][1]==0&&playground[2][2]==0){
	return 0 ;
	}
	else if(playground[0][1]==0&&playground[1][1]==0&&playground[2][1]==0){
		return 0;
	}
	else if(playground[0][2]==0&&playground[1][1]==0&&playground[2][0]==0) {
	return 0;
	}
	else if(playground[0][0]==0&&playground[1][0]==0&&playground[2][0]==0){
		return 0;
	}
	else if(playground[0][2]==0&&playground[1][2]==0&&playground[2][2]==0){
		return 0;
	}
	return"draw";
}





document.querySelector(".resets").onclick=function(){
	let rows=document.querySelectorAll("tr");
	for(let i=0; i<3; i++){
		let column = rows[i].querySelectorAll("td");
		for(let x=0; x<3; x++){
			if (column[x].innerHTML=="x") {
				column[x].classList.remove("x");
			}
			else if(column[x].innerHTML==0){
				column[x].classList.remove("o");
			}
			column[x].innerHTML="";
		}
	}
	document.querySelector("table").classList.remove("hidden");
	document.querySelector("p").classList.add("winner");
	document.querySelector("span").innerHTML="";
	char="x";
	turn=1;
	playground=[["*","*","*"],["*","*","*"],["*","*","*"]];
	document.querySelector(".row").value="";
	document.querySelector(".column").value="";
}



let moon=document.querySelector(".moon");

moon.onclick=function(event) {
	if (document.body.classList.contains("dark")) {
		document.body.classList.remove("dark");
		document.querySelector(".moon i").classList.add("bxs-moon");
		document.querySelector(".moon i").classList.remove("bxs-sun");
	}
	else {
		document.body.classList.add("dark");
		document.querySelector(".moon i").classList.remove("bxs-moon");
		document.querySelector(".moon i").classList.add("bxs-sun");
	}
	/*document.body.classList.toggle("dark");*/
}