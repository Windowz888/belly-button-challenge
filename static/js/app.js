//get and log the JSON data 
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
    console.log(data);

    //Populate the dropdown menu
    let menu = d3.select("#selDataset");
    data.names.forEach((name) => {
        menu.append("option").text(name).property("value");
    });

    // check
    updPlts(data.names[0], data);

});

function updPlts(selSmp, data) {
    //get new data each time a new sample is selected

    // Filter the data 
    let smp = data.samples.filter(obj => obj.id == selSmp)[0];

    // Get the top 10 OTUs
    let otuId = smp.otu_ids.slice(0, 10).map(nId => "OTU " + nId.toString()).reverse();
    let otuLbl = smp.otu_labels.slice(0, 10).reverse();
    let smpVal = smp.sample_values.slice(0, 10).reverse();

    // trace bar chart
    let trace = {
        x: smpVal,
        y: otuId,
        text: otuLbl,
        type: "bar",
        orientation: "h"
    };

    let barD = [trace];

    // Render the plot to the div tag with id "bar"
    Plotly.newPlot("bar", barD);

    // trace bubble chart
    let bubTrc = {
        x: smp.otu_ids,
        y: smp.sample_values,
        text: smp.otu_labels,
        mode: "markers",
        marker: {
            size: smp.sample_values,
            color: smp.otu_ids,
            colorscale: "Earth"
        }
    };

    let bubD = [bubTrc];

    let lyt = {
        xaxis:{title: "OTU ID"},
        height: 600,
        width: 1000
    };

    // Render the plot to the div tag with id "bubble"
    Plotly.newPlot("bubble", bubD, lyt);

     // show key-value pair from JSON 
     let meta = data.metadata.filter(obj => obj.id == selSmp)[0];

     let metaD = d3.select("#sample-metadata");
 
     metaD.html("");
 
     //add key,val pair to the metadata div
     Object.entries(meta).forEach(([key, value]) => {
         metaD.append("h5").text(`${key}: ${value}`);
     });

}

function optChg(selSmp) {
    //get new data each time a new sample is selected
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        console.log(data);
        updPlts(selSmp, data);
    });
}


