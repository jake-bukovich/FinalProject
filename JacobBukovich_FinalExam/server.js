


var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());             
app.use(bodyParser.urlencoded({ extended: true })); 


var pgp = require('pg-promise')();
var app = express();



let dbConfig = {
  host: 'localhost',
  port: 5432,
  database: 'search',
  user: 'postgres',
  password: 'pwd'
};

const isProduction = process.env.NODE_ENV === 'production';
dbConfig = isProduction ? process.env.DATABASE_URL : dbConfig;
let db = pgp(dbConfig);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));


app.get('/', function (req, res) {
  res.render('pages/main', {
    my_title: "Main Page"
  });
});

app.get('/main', function(req,res){
  var query="select * from search;";
  db.any(query)
    .then(function(rows){
      res.render('pages/main',{
        my_title:'Main Page',
        data: rows,
        name:'',
        country:'',
        web_page:''


      })

    })

});

app.listen(3000);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

module.exports = app;







/*$(function () {
  $("form[role='search']").submit(function (event) {
    event.preventDefault();
    var s = $("input[type='text']", this).val;

    var url = "http://universities.hipolabs.com/search?name=" + s;
    $.ajax({ url: url, dataType: "jsonp" }).then(function (data) {
      console.log(data);
      var search = data.completedSearch[0].result[0].search;
      var ser = "<div class='row'>";
      for (var i = 0; i < search.length; i++) {
        ser += "<div class='column>";
        ser += "<div class='card'>";
        ser += "<h2>" + search[i].name + "</h2>";
        ser += "<p>" + search[i].country + "</p>";
        ser += "<a href= '" + search[i].webpage + "' class = 'button web-button'>University Website</a>";
        ser += "</div></div>";


      };
      $('.results').html(ser);
    });

  });
});
*/