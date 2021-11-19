function zoom(d) { // http://jsfiddle.net/ramnathv/amszcymq/

    console.log('clicked: ' + d.data.name + ', depth: ' + d.depth);

    currentDepth = d.depth;
    parent.datum(d.parent || nodes);

    x.domain([d.x0, d.x1]);
    y.domain([d.y0, d.y1]);

    var t = d3.transition()
        .duration(800)
        .ease(d3.easeCubicOut);

    cells
        .transition(t)
        .style("left", function(d) { return x(d.x0) + "%"; })
        .style("top", function(d) { return y(d.y0) + "%"; })
        .style("width", function(d) { return x(d.x1) - x(d.x0) + "%"; })
        .style("height", function(d) { return y(d.y1) - y(d.y0) + "%"; });

    cells // hide this depth and above
        .filter(function(d) { return d.ancestors(); })
        .classed("hide", function(d) { return d.children ? true : false });

    cells // show this depth + 1 and below
        .filter(function(d) { return d.depth > currentDepth; })
        .classed("hide", false);

}
