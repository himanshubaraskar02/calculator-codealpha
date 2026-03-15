function addTask(){

let input=document.getElementById("taskInput");
let li=document.createElement("li");

li.textContent=input.value;

li.onclick=function(){
this.remove();
}

document.getElementById("taskList").appendChild(li);

input.value="";
}