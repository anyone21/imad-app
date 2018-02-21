console.log('My application');
// change the text of the main-text div
var element = document.getElementById('main-text'); 
element.innerHTML = 'New- data has been loaded';

//Move the image
var img = document.getElementById('madi');
img.onclick = function()
{
  img.style.marginLeft = '100px';     
};