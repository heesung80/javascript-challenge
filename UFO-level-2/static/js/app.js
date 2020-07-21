// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody =d3.select("tbody")
//console.log(tableData);

data.forEach(function(ufoReport){
    //console.log(ufoReport);
    var row =tbody.append("tr");
    Object.entries(ufoReport).forEach(([key,value]) =>
    {
        console.log(key.value);
        var column = row.append("td");
        column.text(value);
        });
});


var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on ("click",runEnter);
form.on ("submit",runEnter);

function runEnter(){
    d3.event.preventDefault();
    var inputElement=d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var inputElement2=d3.select("#state");
    var inputValue2 = inputElement2.property("value");
    //console.log(inputValue);
    //console.log(tableData);
    var filterData = tableData.filter(table =>table.datetime === inputValue && table.state === inputValue2);
    //console.log(filterData);
    var table = d3.select("tbody");
    table.html("");
    for (var i=0; i < filterData.length;i++){
        //console.log(filterData[i]);
        //console.log(filterData[i].datetime)
        var Date = filterData[i].datetime;
        var City = filterData[i].city;
        var State = filterData[i].state;
        var Country = filterData[i].country;
        var Shape = filterData[i].shape;
        var Duration=filterData[i].durationMinutes;
        var Comments = filterData[i].comments;
        console.log(Date);
        console.log(City);
        console.log(State);
        console.log(Country);
        console.log(Shape);
        console.log(Comments);
        var row = table.append("tr")
        row.append("td").text(Date);
        row.append("td").text(City);
        row.append("td").text(State);
        row.append("td").text(Country);
        row.append("td").text(Shape);
        row.append("td").text(Duration);
        row.append("td").text(Comments);
        
}};
    

