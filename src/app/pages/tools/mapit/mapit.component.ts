import { Component, OnInit } from '@angular/core';

import { forceSimulation, forceLink, forceManyBody, forceCenter, drag, zoom as d3_z } from 'd3';
import * as d3 from 'd3-selection';
import { links, nodes, MANY_BODY_STRENGTH } from './data';

@Component({
  selector: 'app-mapit',
  templateUrl: './mapit.component.html',
  styles: [
  ]
})
export class MapitComponent implements OnInit {

  svg_width = 0;
  svg_height = 0;

  constructor() { }

  ngOnInit(): void {

    const svg = d3.select('#container');

    const svg_container = document.getElementById('map-container')!;
    this.svg_width = svg_container.offsetWidth;
    this.svg_height = svg_container.offsetHeight;
    const centerX = this.svg_width/2;
    const centerY = this.svg_height/2;

    const simulation = forceSimulation(nodes)
      .force('charge', forceManyBody().strength(MANY_BODY_STRENGTH))
      .force('link', forceLink(links).distance(((link: any) => link.distance) as any))
      .force('center', forceCenter(centerX, centerY));
    
    const dragInteraction: any = drag().on('drag', (event: any, node: any) => {
      node.fx = event.x;
      node.fy = event.y;
      simulation.alpha(1);
      simulation.restart();
    });

    const g: any = svg.append("g")
      .attr("class", "everything");

    const lines = svg
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', ((link: any) => link.color || 'black') as any)
      .attr('visibility', (link: any) => link.source.type === 'Main' && link.target.type === 'Main' ? 'visible !important' : link.visibility )
      .attr('class', (link: any) => `line-${ link.source.id }`)
      .attr('source', (link: any) => link.source.id )
      .attr('target', (link: any) => link.target.id )
      .attr('type', 'line')

    const circles = svg
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('fill', ((node: any) => node.color || 'gray') as any)
      .attr('r', ((node: any) => node.size) as any)
      .attr('class', (node: any) => `node-${ node.id }`)
      .attr('id', (node: any) => `node-${ node.id }`)
      .attr('visibility', (node: any) => node.visibility ? node.visibility : 'hidden')
      .attr('parents', (node: any) => node.parents ? node.parents : '')
      .call(dragInteraction)
      .on("mouseover", mouseover)
      .on("mouseout", (node:any) => mouseout(node))
      .on("contextmenu", (node:any) =>  alert(JSON.stringify(node.srcElement.__data__)))
      .on("click", (n:any) => displayChildNodes(n.srcElement.__data__))
    
    const text = svg
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .attr('text-anchor', ('middle') as any)
      .attr('alignment-baseline', ('middle') as any)
      .attr('class', (node: any) => `text-${ node.id }`)
      .attr('id', (node: any) => `text-${ node.id }`)
      .attr('visibility', (node: any) => node.visibility ? node.visibility : 'hidden')
      .attr('type', 'text')
      .style('pointer-events', ('none') as any)
      .text( (node: any) => node.id );
    
    
    const zoomFn: any = d3_z()
        .scaleExtent([1, 8])
        .on('zoom', function(event: any, d: any) {
          svg.attr("transform", event.transform)
        })
        //.on("dblclick.zoom", null);    
    //svg.call(zoomFn);

    //Legend
    let legendIconX = 10;
    let legendIconY = 10;
    let legendTextX = 20;
    let legentTextY = 20;
    for(let node of nodes){
      if(node.id){
        svg
          .append("circle")
          .attr("cx",legendIconX)
          .attr("cy",legendIconY)
          .attr("r", 6)
          .attr("id", `legend-color-${ node.id }`)
          .style("fill", node.color)
          .on('click', () => {
            const legendText = document.getElementById(`legend-${ node.id }`)!;
            const circleNode = document.getElementById(`node-${ node.id }`)!;
            const circleText = document.getElementById(`text-${ node.id }`)!;

            if(legendText.style.textDecoration === 'none'){
              legendText.style.textDecoration = 'line-through'
              circleNode.style.visibility = 'hidden';
              circleText.style.visibility = 'hidden';
            } else if(legendText.style.textDecoration === 'line-through') {
              legendText.style.textDecoration = 'none';
              circleNode.style.visibility = 'visible';
              circleText.style.visibility = 'visible';
            }

          })
        svg
          .append("text")
          .attr("x", legendTextX)
          .attr("y", legentTextY)
          .attr("alignment-baseline","middle")
          .attr("id", `legend-${ node.id }`)
          .text(node.id)
          .style("font-size", "15px")
          .style('pointer-events', ('none') as any)
          .style("text-decoration", () => node.visibility === 'visible' ? 'none' : 'line-through')
          .style("font-weight", () =>  node.visibility === 'visible' ? 'bold' : 'normal')
        legendIconY = legentTextY += 18;
      }
    } 
    
    simulation.on('tick', () => {
      let margin = 5;
        circles
          .attr('cx', ((node: any) => Math.max(margin, Math.min(this.svg_width - margin, node.x))) as any)
          .attr('cy', ((node: any) => Math.max(margin, Math.min(this.svg_height - margin, node.y))) as any);
        
        text
          .attr('x', ((node: any) => node.x) as any)
          .attr('y', ((node: any) => node.y) as any);
   
        lines
          .attr('x1', ((link: any) => link.source.x) as any)
          .attr('y1', ((link: any) => link.source.y) as any)
          .attr('x2', ((link: any) => link.target.x) as any)
          .attr('y2', ((link: any) => link.target.y) as any)
      });

    function mouseover(d: any) {
        lines
          .attr("stroke","black")
          .attr("stroke-width",2);
        lines
          .transition()
          .duration(500)
          .style("opacity", function(o: any) {
              return o.source.id === d.srcElement.__data__.id || o.target.id === d.srcElement.__data__.id ? 1 : .1;
          });
        circles
          .transition()
          .duration(500)
          .attr('r', (node:any) => {
            if(node.id === d.srcElement.__data__.id) return node.size + 15
            return node.size;
          });
    }

    function mouseout(d: any) { 
      lines
        .attr('stroke', ((line: any) => line.color) as any );
      lines
        .transition()
        .duration(500)
        .style("opacity", 1);
      circles
        .attr('fill', ((node: any) => node.color || 'gray') as any)
        .attr('r', ((node: any) => node.size) as any)
      circles
        .transition()
        .duration(500)
     }


    function displayChildNodes(node: any){
      const node_lines: any = document.getElementsByClassName(`line-${ node.id }`);
      for(let line of node_lines){
        const childNode = document.getElementById(`node-${ line.getAttribute('target')}`)!;
        const childNodeText = document.getElementById(`text-${ line.getAttribute('target')}`)!;
        childNode.getAttribute('visibility') === 'visible' ? childNode.setAttribute('visibility', 'hidden') : childNode.setAttribute('visibility', 'visible');
        childNodeText.getAttribute('visibility') === 'visible' ? childNodeText.setAttribute('visibility', 'hidden') : childNodeText.setAttribute('visibility', 'visible');
        
        line.getAttribute('visibility') === 'visible' ? line.setAttribute('visibility', 'hidden') : line.setAttribute('visibility', 'visible');

        let other_parents = childNode.getAttribute('parents')!.split('*');
        other_parents = [...new Set(other_parents)];
        let myindex = other_parents.indexOf('undefined');
        other_parents.splice(myindex, 1);
        myindex = other_parents.indexOf(line.source);
        other_parents.splice(myindex, 1);
        
        for(let parent_id of other_parents){
          const parent_lines = document.getElementsByClassName(`line-${ parent_id }`)!;
          for(let i=0; i<parent_lines.length; i++){
            const ids = childNode.getAttribute('id')!.split('-');
            if(parent_lines[i].getAttribute('target') === ids[1] && parent_lines[i].getAttribute('visibility') === 'visible'){
              childNode.setAttribute('visibility', 'visible');
              childNodeText.setAttribute('visibility', 'visible')
            } 
          }
        } 
      }
    }
    
  }

}
