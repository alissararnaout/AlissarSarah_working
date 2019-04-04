(() => {
	
console.log("yeet this yeast");

	
document.querySelector("#hamMenu").onclick = function() {showMenu()};
document.querySelector("#backtotop").onclick = function() {toTop()};
document.querySelector("#nav1").onmouseover = function() {showPaw1()};
document.querySelector("#nav1").onmouseoff = function() {byePaw1()};
document.querySelector("#nav2").onmouseover = function() {showPaw2()};
document.querySelector("#nav2").onmouseoff = function() {byePaw2()};
document.querySelector("#nav3").onmouseover = function() {showPaw3()};
document.querySelector("#nav3").onmouseoff = function() {byePaw3()};
document.querySelector("#nav4").onmouseover = function() {showPaw4()};
document.querySelector("#nav4").onmouseoff = function() {byePaw4()};
document.querySelector("#nav5").onmouseover = function() {showPaw5()};
document.querySelector("#nav5").onmouseoff = function() {byePaw5()};

	
	let menu = document.querySelector(".menu");
	let paw1 = document.querySelector("#paw1");
	let nav1 = document.querySelector("#nav1");
	let paw2 = document.querySelector("#paw2");
	let nav2 = document.querySelector("#nav2");
	let paw3 = document.querySelector("#paw3");
	let nav3 = document.querySelector("#nav3");
	let paw4 = document.querySelector("#paw4");
	let nav4 = document.querySelector("#nav4");
	let paw5 = document.querySelector("#paw5");
	let nav5 = document.querySelector("#nav5");
	
	
function showMenu(){ //this is how the hamburger menu shows up
	menu.classList.toggle("show");
}
	
function toTop(){ //this is the button that takes you back to the top on mobile
	document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}
	
function showPaw1(){
	paw1.style.display = "block";

}	
	
function byePaw1() {
	paw1.style.display = "none";

}
	
function showPaw2(){
	paw2.style.display = "block";

}	
	
function byePaw2() {
	paw2.style.display = "none";

}
	
function showPaw3(){
	paw3.style.display = "block";

}	
	
function byePaw3() {
	paw3.style.display = "none";

}
	
function showPaw4(){
	paw4.style.display = "block";

}	
	
function byePaw4() {
	paw4.style.display = "none";

}
	
function showPaw5(){
	paw5.style.display = "block";

}	
	
function byePaw5() {
	paw5.style.display = "none";

}

	
nav1.addEventListener("mouseover", showPaw1);
nav1.addEventListener("mouseout", byePaw1);
nav2.addEventListener("mouseover", showPaw2);
nav2.addEventListener("mouseout", byePaw2);
nav3.addEventListener("mouseover", showPaw3);
nav3.addEventListener("mouseout", byePaw3);
nav4.addEventListener("mouseover", showPaw4);
nav4.addEventListener("mouseout", byePaw4);
nav5.addEventListener("mouseover", showPaw5);
nav5.addEventListener("mouseout", byePaw5);


})();

