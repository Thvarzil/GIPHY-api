/**
 * Created by Monk on 7/26/2017.
 */

var giphysearch=["bender", "doggo", "deadpool"];

function renderButtons() {
    // Deletes the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();
    // Loops through the array of movies
    for (var i = 0; i < giphysearch.length; i++) {
        // Then dynamicaly generates buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adds a class of movie to our button
        a.attr("class", "searcher");
        a.attr("z-index", 500000);
        // a.attr("onclick", "function(){ helpIveBeenClicked(); }");
        // Added a data-attribute
        console.log(a.attr("class"));
        var dataname = giphysearch[i].split(" ").join("+");
        a.attr("data-name", dataname);
        console.log("The data-name attr is " + a.attr("data-name"));
        // Provided the initial button text
        a.text(giphysearch[i]);
        // Added the button to the buttons-view div
        $("#buttons-view").append(a);
    }
}


function queryItUp(movie){
    var search = movie;

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        search + "&api_key=b0c19a35d4eb44dcb0f9193929975e60&limit=25";
    // Creates AJAX call for the specific movie button being clicked
    console.log("Help!! I've been clicked!!");
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        console.log(response);
        $("#gifs-view").empty();
        for(var i = 0; i<response.data.length; i++){
            var a = $("<div>");
            console.log(response.data[i].embed_url);
            a.html("<img src='" + response.data[i].images.fixed_height.url + "'>");
            $("#gifs-view").append(a)
        }
    })
}

// Calling the renderButtons function to display the intial buttons
$(document).ready(function () {
    renderButtons();

    $("#add-search").on("click", function() {

        // This line of code will grab the input from the textbox
        var searchval = $("#search-input").val().trim();
        console.log(searchval);
        // The movie from the textbox is then added to our array
        giphysearch.push(searchval);
        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
    });

});


// function helpIveBeenClicked(){
//     console.log("Help, I've been clicked!!");
// }
//
$("body").on("click", ".searcher", function () {
    console.log("Help! I've been clicked!!");
    var data = $(this).attr("data-name");
    console.log("This is not the data you are looking for: " + data);
    queryItUp(data);
});

console.log("JS is online");