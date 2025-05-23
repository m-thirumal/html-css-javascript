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
}

