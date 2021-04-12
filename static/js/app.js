// Add data to table 
data.forEach(function(appendTable) {

    // Add a row 
    var row = d3.select("tbody").append("tr");

    // Add a cell and enter values into each cell 
    Object.entries(appendTable).forEach(function([key,value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});


// Select the filter button
var button = d3.select("button");

// Event handler for button 
button.on("click", function() {

    // Clear existing table data
    d3.select("tbody").html("");

    // Get input value
    var input = d3.select("input").property("value");

    // Find data matching the input
    var filteredData = data.filter(item => item.datetime === input);

    // Add data to table
    filteredData.forEach(function(appendTable) {
        // Add a row 
        var row = d3.select("tbody").append("tr");

        // Add a cell and enter values into each cell 
        Object.entries(appendTable).forEach(function([key,value]) {
            var cell = row.append("td");
            cell.text(value);
    });
})});

// Select the dropdown menu 
var dropdownMenu = d3.selectAll("#selDataset");

// Function to update the filter box 
dropdownMenu.on("change", function() {

    // Select filter option, label, placeholder
    var filterOption = dropdownMenu.property("value");
    var label = d3.selectAll("label");
    var placeholder = d3.selectAll("input");

    // Change label and placeholder 
    if (filterOption == 'City') {
        label.text('Enter a City');
        placeholder.attr("placeholder","Seattle");
    }
    else if (filterOption == 'State') {
        label.text('Enter a State');
        placeholder.attr("placeholder","Washington");
    }
    else if (filterOption == 'Country') {
        label.text('Enter a Country');
        placeholder.attr("placeholder","US");
    }
    else if (filterOption == 'Shape') {
        label.text('Enter a Shape');
        placeholder.attr("placeholder","Circle")
    }
    else if (filterOption == 'Date') {
        label.text('Enter a Date');
        placeholder.attr("placeholder","1/11/2011");
}});


