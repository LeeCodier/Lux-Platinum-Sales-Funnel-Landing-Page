"use client";
import * as d3 from "d3";
import React, { useEffect, useRef, useState } from "react";

export const LTM = () => {
  const [data] = useState([100, 110, 110, 105, 95]);
  const svgRef = useRef();
  useEffect(() => {
    //set up SVG
    const width = 250;
    const height = 150;
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background", "#3A3A3A")
      .style("overflow", "visible");

    //setting up the scaling
    const xScale = d3
      .scaleBand()
      .domain(data.map((val, i) => i))
      .range([0, width])
      .padding(0.5);
    const yScale = d3.scaleLinear().domain([0, height]).range([height, 0]);
    //setting up axis
    var xdata = ["2018", "2019", "2020", "2021", "2022", "2023"];

    const xAxis = d3
      .axisBottom(xScale)
      .ticks([data.length])
      .tickFormat(function (d) {
        return xdata[d];
      });
    const yAxis = d3.axisLeft(yScale).ticks(5);
    //append the axis's
    svg.append("g").call(xAxis).attr("transform", `translate(0,${height})`);
    // svg.append("g").call(yAxis);

    //setting up the svg data
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("x", (x, i) => xScale(i))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth())
      .attr("height", (val) => height - yScale(val))
      .attr("fill", "#C0C0C0");
  }, [data]);
  return <svg ref={svgRef}></svg>;
};

export const MPV = () => {
  const [data] = useState([25, 50, 35, 40, 60, 50]);
  const svgRef = useRef();
  useEffect(() => {
    //set up SVG
    const width = 250;
    const height = 150;
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background", "#3A3A3A")
      .style("overflow", "visible");

    //Range of vales of the chart
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    const yScale = d3.scaleLinear().domain([0, height]).range([height, 0]);
    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);
    // setting up the axes
    var xdata = ["2018", "2019", "2020", "2021", "2022", "2023"];

    const xAxis = d3
      .axisBottom(xScale)
      .ticks([data.length])
      // .tickValues(d3.range([25, 50, 35, 40, 60, 50]))
      // .tickFormat((i) => i + 1);
      .tickFormat(function (d) {
        return xdata[d];
      });
    const yAxis = d3.axisLeft(yScale).ticks(5);
    //append the axis's
    svg.append("g").call(xAxis).attr("transform", `translate(0,${height})`);
    svg.append("g").call(yAxis);
    //setting up the data
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "#C0C0C0");
  }, [data]);

  return <svg ref={svgRef}></svg>;
};
