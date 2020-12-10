
var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies



app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));


app.get('/', function (req, res) {

  var sql = require("mssql");
  
  var config = {
    user: 'jake-bukovich',
    password: 'abc',
    server: 'localhost',
    database: 'uni-reviews'
  };

  sql.connect(config, function (err) {

    if (err) console.log(err);

    var request = new sql.Request();

    request.query('select * from reviews', function (err, recordset) {

      if (err) console.log(err)

      res.send(recordset);

    });
  });
});

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



//app.listen(3000);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});









