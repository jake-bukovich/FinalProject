



    $("form[role='search']").submit(function (event) {
        event.preventDefault();
        var s = $("input[type='text']", this).val;

        var url =new URL( "http://universities.hipolabs.com/search?name=" + s);
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


/*function fetchSearch(){
    var script=document.createElement('script');
    script.src = "http://universities.hipolabs.com/search?name="+document.getElementsByName("search");

    document.querySelector('head').appendChild(script);
}
function createCards(data){


}*/


/*$(document).ready(function () {
    var url = new URL("http://universities.hipolabs.com/search?name="); //Place your weatherstack API Call Here - access_key to be used: 5bc82451636190abd9d7afe6fe9b20b5


    $.ajax({ url: url, dataType: "json" }).then(function (data) {
        console.log(data);






    })
    


});*/