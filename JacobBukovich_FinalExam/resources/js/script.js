

function fetchSearch(){
    var script=document.createElement('script');
    script.src = "http://universities.hipolabs.com/search?name="+document.getElementsByName("search");

    document.querySelector('head').appendChild(script);
}
function createCards(data){


}


/*$(document).ready(function () {
    var url = new URL("http://universities.hipolabs.com/search?name="); //Place your weatherstack API Call Here - access_key to be used: 5bc82451636190abd9d7afe6fe9b20b5


    $.ajax({ url: url, dataType: "json" }).then(function (data) {
        console.log(data);






    })
    


});*/