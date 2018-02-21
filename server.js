// used to create a webserver
var express = require('express'); 
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles:{
    'article-one':{
      title:'Article - One | ujjwal bansal',
      heading:'Article One',
      date:'FEB 21,2018',
      content:`
                <p>
            My name isujjjwal bansal . why is this code not working! Damn! What should I do now? 
            Hope my code doesn't break on live, take care Pratik. It's old code, this function is
            used at 1583 places, making change in it is like awakening a sleeping monster! 
            </p>
            <P>
            We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly
            once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.
            </p>`
    },
    'article-two':{
        title:'Article - Two | ujjwal bansal',
      heading:'Article Two',
      date:'FEB 22,2018',
      content:`
            <p>
           .    This is article two. Which is the part of the this application second.
            </p>`
    },
    'article-three':{
        title:'Article - Three | ujjwal bansal',
      heading:'Article Three',
      date:'FEB 23,2018',
      content:`
            <p>
                This is the article THREE. wHICH IS THE PART OF THE APPLICATION third. 
            </p>`
    }
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate=`
        <html>
          <head>
            <title> 
                ${title}
            </title>
            <meta name="viewport" content="width-device-width, initial-scale-1"/>
            <link href="/ui/style.css" rel="stylesheet" />
          </head>
            <body>
              <div class="container">
                  <div>
                      <o href="/">Home</o>
                  </div>
              </div>
              <hr/>
              <h3> ${heading} </h3>
              <div>
                  ${date}
              </div>
              <div>
                ${content}
             </div>
                
            </body>
        </html>
    `;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    // articleName == article-one
    // articles[articleName] == {} content object for article one
    var articleName = req.params.articleName
    res.send(createTemplate(articles[articleName]));
});

app.get('/article-two',function(req,res)
{
  res.send('Article two is requested and will be served');
});
app.get('/article-three',function(req,res)
{
  res.send('Article three is requested and will be served');
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
