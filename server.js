var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone ={
    title: 'Aticle-one | Ann',
    heading: 'Article One',
    date: 'Sep 15',
    content : ` <div>
           <p>
           This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.
           </p>
       </div>
       
       <div>
           <p>
           This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.
           </p>
       </div>
       
       <div>
           <p>
           This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.
           </p>
       </div>
       
       <div>
           <p>
           This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.
           </p>
       </div>`
    
};

function createhtmltemplate(data){
    
    var title=title.data;
    var heading=heading.data;
    var date=date.data;
    var articleone=articleone.data;
    
var htmltemplate=`
    <html>
    <head>
        <title>
            $(title);
        </title>
    </head>
    <body>
       <div>
           <a href ="/">Home</a>
       </div> 
       <hr/>
       <h3>
           $(heading);
       </h3>
       <div>
           $(date);
       </div>
       $(articleone);
       </div>
    </body>
</html>

    
`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/article-one',function (reg,res){
    res.send(createhtmltemplate(articleone));
});

app.get('/article-two',function (reg,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function (reg,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
