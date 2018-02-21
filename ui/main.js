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
button.onclick = function()
{
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        if(request.readyState === XMLHttpRequest.DONE)
        {
            // Take some action
            if(request.status ==== 200)
            {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //not done yet
    };
  // make a response to the counter endpoint
  //capture the responsea nad store it in the variable
  // make the request
  request.open('GET','http://ujjwalcode.imad.hasura-app.io/counter',true);
  request.send(null);  
};






