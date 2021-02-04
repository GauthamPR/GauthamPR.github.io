// List of words
var myWords = [
  { word: "React", size: "30" },
  { word: "NodeJS", size: "35" },
  { word: "d3", size: "15" },
  { word: "CSS", size: "35" }, 
  { word: "HTML", size: "35" },
  { word: "Bootstrap", size: "20" },
  { word: "jQuery", size: "20" },
  { word: "JavaScript", size: "40" },
  { word: "Python", size: "20" },
  { word: "Java", size: "15" },
  { word: "C", size: "35"},
  { word: "SQL", size: "25"}
];

// set the dimensions and margins of the graph
var margin = { top: 0, right: 0, bottom: 0, left: 0 },
  width = 300 - margin.left - margin.right,
  height = 250 - margin.top - margin.bottom;

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
    .style("opacity", d=>d.size/40)
    .attr("transform", function (d) {
      return "translate(" + [d.x, d.y] + ")";
    })
    .text(function (d) { return d.text; });
}