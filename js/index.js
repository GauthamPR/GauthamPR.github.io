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
  { word: "C", size: "35" },
  { word: "SQL", size: "25" }
];

var margin = { top: 0, right: 0, bottom: 0, left: 0 },
  width = 300 - margin.left - margin.right,
  height = 250 - margin.top - margin.bottom;

var t = d3.transition()
  .duration(750)
  .ease(d3.easeLinear);

var svg = d3.select("#word-cloud").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

function renderFrame() {
  var layout = d3.layout.cloud()
    .size([width, height])
    .words(myWords.map(function (d) { return { text: d.word, size: d.size }; }))
    .padding(5)
    .rotate(function () { return 0; })
    .fontSize(function (d) { return d.size; })
    .on("end", draw);
  layout.start();

  function draw(words) {
    svg.select("g").remove();
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
      .style("opacity", d => d.size / 40)
      .attr("transform", function (d) {
        return "translate(" + [d.x, d.y] + ")";
      })
      .text(function (d) { return d.text; })
      .transition(t)
  }
}

renderFrame();

//setInterval(renderFrame, 2000);