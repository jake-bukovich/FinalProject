/***********************
  Load Components!

  Express      - A Node.js Framework
  Body-Parser  - A tool to help use parse the data in a post request
  Pg-Promise   - A database tool to help use connect to our PostgreSQL database
***********************/
var express = require('express'); //Ensure our express framework has been added
var app = express();
var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Create Database Connection
var pgp = require('pg-promise')();

/**********************
  Database Connection information
  host: This defines the ip address of the server hosting our database.  We'll be using localhost and run our database on our local machine (i.e. can't be access via the Internet)
  port: This defines what port we can expect to communicate to our database.  We'll use 5432 to talk with PostgreSQL
  database: This is the name of our specific database.  From our previous lab, we created the football_db database, which holds our football data tables
  user: This should be left as postgres, the default user account created when PostgreSQL was installed
  password: This the password for accessing the database.  You'll need to set a password USING THE PSQL TERMINAL THIS IS NOT A PASSWORD FOR POSTGRES USER ACCOUNT IN LINUX!
**********************/


let dbConfig = {
  host: 'localhost',
  port: 5432,
  database: 'review',
  user: 'postgres',
  password: 'pwd'
};

const isProduction = process.env.NODE_ENV === 'production';
dbConfig = isProduction ? process.env.DATABASE_URL : dbConfig;
let db = pgp(dbConfig);

$(function () {
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


app.listen(3000);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});