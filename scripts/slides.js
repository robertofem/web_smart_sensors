var imageInterval = 4000
var slideIndex = 0;
showDivs(slideIndex);
carousel();


/*
Function for changing the image of the slider according to the
selected badge item
*/
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
	setBadge(slideIndex);
}


/*
Function called when a badge button is pressed
*/
function currentDiv(n) {
  showDivs(slideIndex = n);
}


/*
Function for changing the image of the slider at a fixed interval
This value is stored in the variable imageInterval
*/
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
	setBadge(slideIndex);
    setTimeout(carousel, imageInterval); // Change image every x seconds
}


/*
Sets the color of the actual slider asociated badge item to black.
First of all, it resets to original class the rest of the badges. Then,
it sets to black the active one.
*/
function setBadge(n) {
	var x = document.getElementsByClassName("w3-badge");
	var i, j = x.length;
	for (i = 0; i < j; ++i) {
        x[i].className = "w3-badge demo w3-border w3-transparent w3-hover-white";
	}
	x[n-1].className = "w3-badge";
}
