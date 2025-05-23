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
    // console.log(data);
    // Process the data as needed
    // For example, you can convert strings to numbers, filter data, etc.
    return data;
}

function graph(data, id) {
    console.log(id, data);
}

