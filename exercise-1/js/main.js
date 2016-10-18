// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {
    // Use $.get to read in your `data/students.csv` dataset: remember, you must be running a local server
    $.get("data/students.csv", function(data, error) {
        //Log the data
        console.log("Unparsed Data: ")
        console.log(data);

        parseData(data);
    });

    // Parse the data using Papa.parse
    var parseData = function(data) {
        console.log("Parsed Data: ")
        var parsedData = Papa.parse(data, {
            header: true
        }).data;
        console.log(parsedData);
        createTable(parsedData);
    };

    // Use jQuery to create a table, and store that in a variable
    // Append a table header for each key in your first observation
    // Iterate through your array and create a new table row for each element in your array
    // Add a cell (<td>) for each key/value pair in your object
    // Select your `sandbox` section, and append your table to it
    var createTable = function(data) {
        $("#sandbox").append("<table><tr ><td > student_id<td > exam1<td > exam2</tr >");
        var keys = Object.keys(data);
        keys.forEach(function(key) {
            var colKeys = Object.keys(data[key]);
            var newEntry = "<tr>"
            colKeys.forEach(function(col) {
                newEntry += " <td>" + data[key][col] + " </td>";
            });
            newEntry += "</tr>";
            $("table").append(newEntry);
        });
    };



});
