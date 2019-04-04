(() => {
	
console.log("yeet this yeast");

	
document.querySelector("#hamMenu").onclick = function() {showMenu()};
document.querySelector("#backtotop").onclick = function() {toTop()};
	
	let menu = document.querySelector(".menu");
	
function showMenu(){ //this is how the hamburger menu shows up
	menu.classList.toggle("show");
}
	
function toTop(){ //this is the button that takes you back to the top on mobile
	document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}
	


})();

