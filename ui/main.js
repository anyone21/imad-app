/*
console.log('My application');
// change the text of the main-text div
var element = document.getElementById('main-text'); 
element.innerHTML = 'New- data has been loaded';

//Move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight()
{
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function()
{
  var interval = setInterval(moveRight,50);    
};
*/
// var counter code
var button = document.getElementById("counter");
var counter =0;
button.onclick = function()
{
  // make a response to the counter endpoint
  //capture the responsea nad store it in the variabe
  //render the variable in the correct span
  counter = counter +1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};