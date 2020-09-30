function colour(button)
{
	button.style.filter="grayscale(0%) contrast(150%)";
}
function def(button)
{
	button.style.filter="grayscale(100%)";
}
function colourfoot()
{
	var a= document.getElementById('foot');
	a.style="background-color:rgba(0,0,0,1); color:white; text-transform:uppercase;";
}
function colourfootout()
{
	var a= document.getElementById('foot');
	a.style="background-color:rgba(0,0,0,0.5); color:black; text-transform:Capitalize;";
}
function menu(menus)
{
	menus.style="background-color:gray";
}
function menuout(menus)
{
	menus.style="background-color:#0066aa;";
}
function imgchange(num)
{
	document.getElementsByClassName('img1')[num].style="display: none;"
	document.getElementsByClassName('img2')[num].style="display: inline-block;"
}
function imgchange2(num)
{
	document.getElementsByClassName('img2')[num].style="display: none;"
	document.getElementsByClassName('img1')[num].style="display: inline-block;"
}
function codeAddress() {
    var cl = document.getElementsByClassName('img2');
    for(var i=0; i<cl.length; i++){
    	cl[i].style="display: none;";
    }
}
window.onload = codeAddress;