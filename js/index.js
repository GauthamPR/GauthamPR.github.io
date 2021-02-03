// List of words
var myWords = [{ word: "React", size: "30" }, { word: "NodeJS", size: "40" }, { word: "d3", size: "15" }, { word: "CSS", size: "20" }, { word: "HTML", size: "30" }, { word: "Bootstrap", size: "20" }, { word: "jQuery", size: "20" }]

// set the dimensions and margins of the graph
var margin = { top: 10, right: 10, bottom: 10, left: 10 },
  width = 250 - margin.left - margin.right,
  height = 200 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#word-cloud").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

// Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
// Wordcloud features that are different from one word to the other must be here
var layout = d3.layout.cloud()
  .size([width, height])
  .words(myWords.map(function (d) { return { text: d.word, size: d.size }; }))
  .padding(5)        //space between words
  .rotate(function () { return 0; })
  .fontSize(function (d) { return d.size; })      // font size of words
  .on("end", draw);
layout.start();

// This function takes the output of 'layout' above and draw the words
// Wordcloud features that are THE SAME from one word to the other can be here
function draw(words) {
  svg
    .append("g")
    .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
    .selectAll("text")
    .data(words)
    .enter().append("text")
    .style("font-size", function (d) { return d.size + "px"; })
    .style("fill", "black")
    .attr("text-anchor", "middle")
    .style("font-family", "")
    .attr("transform", function (d) {
      return "translate(" + [d.x, d.y] + ")";
    })
    .text(function (d) { return d.text; });
}