var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles ={
 'article-one' :{
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
    
},
 'article-two' :{
    title: 'Aticle-Two | Ann',
    heading: 'Article Two',
    date: 'Sep 15',
    content : ` <div>
           <p>
           This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.
           </p>
       </div>`
       },
       
      'article-three' :{
    title: 'Aticle-Three | Ann',
    heading: 'Article Three',
    date: 'Sep 15',
    content : ` <div>
           <p>
           This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.
           </p>
       </div>`
       }
};
function createhtmltemplate(data){
    
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
var htmltemplate=`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width-device-width ,initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
       <div>
           <a href ="/">Home</a>
       </div> 
       <hr/>
       <h3>
           ${heading}
       </h3>
       <div>
           ${date}
       </div>
       ${content}
       </div>
    </body>
</html>

    
`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get(':/articlename',function (reg,res){
    res.send(createhtmltemplate(articles[articlename]));
    var articlename= req.params.articlename;
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
