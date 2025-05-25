function readData(file, id) {
    console.log("Reading data from file: " + file);
    d3.csv(file, processData)
    .then((data) => graph(data, id))
    .catch((error) => {
        console.error("Error reading data: ", error);
    });
}

function processData(data) {
   // console.log("Processing data");
   let dataItem = {
    year: parseFloat(data.year) || 0.0,
    avg: parseFloat(data["J-D"]) || 0.0
   }
    return data;
}

function graph(data, id) {
    console.log(id, data);
    let width = 4;
    let height = 300;
    let svg = d3.select(id).append("svg")
        .attr("width", data.length * width)
        .attr("height", height);
    let rect = svg.selectAll("rect")
    .data(data).enter().append("rect")
        .attr("width", width)
        .attr("height", 3000)
        .attr("x", (d, i) => i * width)
        .attr("y", 0);
}

