//Debt Button__________________________________________

var myDebt = 0;
var myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
	myDebt += 100;
	// myDebt = myDebt + 100;
	console.log("my debt = $" + myDebt);

	event.stopPropagation();
})



//BG Button____________________________________________

var bgButton = document.getElementById("bg-button");
var html = document.documentElement;

bgButton.addEventListener("click", function() {
	if ( html.style.backgroundColor != "lightpink" ) {
		html.style.backgroundColor = "lightpink";
	} else {
		html.style.backgroundColor = "white";
	}

	event.stopPropagation();
})



//Simpson Button________________________________________

var simpsonButton = document.getElementById("simpson-button");
var simpsonWrapper = document.getElementById("simpson-wrapper");

var simpsons = [];
simpsons[0] = "assets/media/fake_bart.png";
simpsons[1] = "assets/media/krusty.gif";
simpsons[2] = "assets/media/milhouse.gif";
simpsons[3] = "assets/media/prince_lisa.png";

simpsonButton.addEventListener("click", function(){
	var img = document.createElement("img");
	img.src = simpsons[Math.floor(Math.random() * 4 )];
	simpsonWrapper.appendChild(img);

	event.stopPropagation();
})




//___________________________________________________________

html.addEventListener("click", function(event) {
	console.log(event.clientX + "," + event.clientY);

	var sticker = document.createElement("div");
	sticker.classList.add("sticker");
	html.appendChild(sticker);
	sticker.style.left = (event.clientX - 10) + "px";
	sticker.style.top = (event.clientY - 10) + "px";
})


