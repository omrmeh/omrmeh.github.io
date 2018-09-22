var button = document.getElementById("add");
var input = document.getElementById("field");
var list = document.getElementById("list");

var inputNotEmpty = function(inputLength){
	if (inputLength > 0){
		return true;
	}
	return false;
}

var addElement = function(toAdd){
	if (inputNotEmpty(input.value.length)){
		var li = document.createElement("li");
		li.setAttribute("class","list-group-item");
		li.appendChild(document.createTextNode(toAdd));
		list.appendChild(li);
	}
	input.value = "";	
}


button.addEventListener("click", function(){
	addElement(input.value);
})

input.addEventListener("keypress", function(event){
	if (event.keyCode === 13){
		addElement(input.value);
	}
})