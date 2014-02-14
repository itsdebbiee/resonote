/* Add new element into list */ 

function addElement(){
// Get the value into the input text field
var element=document.getElementById('newElement').value;
if(element==""){
// Show an error message if the field is blank;
document.getElementById('msg').style.display="block";
document.getElementById('msg').innerHTML = "Error! Insert a description for the element";
}else{
// This is the <ul id="myList"> element that will contains the new elements
var container = document.getElementById('myList');
// Create a new <li> element for to insert inside <ul id="myList">
var new_element = document.createElement('li');
new_element.innerHTML = element;
container.insertBefore(new_element, container.firstChild);
// Show a message if the element has been added;
document.getElementById('msg').style.display="block";
document.getElementById('msg').innerHTML = "Elemend added!";
// Clean input field
document..getElementById('newElement').value="";
}
}