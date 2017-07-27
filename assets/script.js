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
        a.addClass("searcher");
        // Added a data-attribute
        a.attr("data-name", giphysearch[i]);
        // Provided the initial button text
        a.text(giphysearch[i]);
        // Added the button to the buttons-view div
        $("#buttons-view").append(a);
    }
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
console.log("JS is online");