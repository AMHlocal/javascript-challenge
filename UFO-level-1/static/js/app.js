// Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Columns:
    // date/time, city, state, country, shape, comment
// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

// from data.js
var tableData = data;
//console.log(tableData);

//Reference for table body and columns
var tableBody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

let addData = tableData.forEach((ufoSightings) => {
    row = tableBody.append("tr");
    Object.values(ufoSightings).forEach(value => {
        var cell = row.append("td");
        cell.text(value);
    });
});




//Set up event listener for the filter button
//Reference for input date and filter button
var inputFieldDate = d3.select("#datetime");
var button = d3.select("#filter-btn");

button.on("click", () => {
    //prevent refreshing page
    d3.event.preventDefault();
    
    var inputDate = inputFieldDate.property("value");
    let dateFilter = tableData.filter(tableData => tableData.datetime === inputDate);
    console.log(inputDate);
    console.log(dateFilter);
     
    //reomve any odd data that doesn't match out datetime
    tableBody.html("");
    //append table rows from dateFilter
    dateFilter.forEach((ufoSightings) =>{
        var row = tableBody.append("tr");
        Object.entries(ufoSightings).forEach(([key, value])=> {
            var cell = row.append("td");
            cell.text(value);
        });
    });

});