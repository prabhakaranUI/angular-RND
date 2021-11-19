import { AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { wasmFolder } from '@hpcc-js/wasm';
import { graphviz } from 'd3-graphviz';
import * as SvgPanZoom from 'svg-pan-zoom';
import * as d3 from 'd3';

@Component({
  selector: 'app-viz',
  templateUrl: './viz.component.html',
  styleUrls: ['./viz.component.scss']
})
export class VizComponent implements OnInit, AfterViewInit {
  @ViewChild('graph', {static: false}) el: ElementRef;
  panZoomTiger;
  graphInstance: string;
  dotString = `digraph G {
      compound=true;
      subgraph cluster_0 {
      color= "#1565c0";
      node [ shape= rect fontcolor="#1565c0" color=azure3];
      a0 -> a1  -> a2 -> a3;
      label = "Table 1";
      }
      subgraph cluster_1 {
      node [ shape= rect fontcolor="#1565c0" color=azure3];
      b0 -> b1 -> b2 -> b3;
      label = "Table 2";
      color= "#1565c0";
      }
      subgraph cluster_2 {
      node [ shape= rect fontcolor="#1565c0" color=azure3];
      c0 -> c1;
      label = "Table 3";
      color= "#1565c0";
      }
      a1 -> b3 [label="4" ltail="cluster_0" lhead="cluster_1"];
      a0 -> c1
      c1->b0
      }`;
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    wasmFolder('assets/@hpcc-js/wasm/dist/');
    this.generateGraph();
  }

  attributer(datum, index, nodes): void {
    const selection = d3.select(this);
    console.log(selection, 'selectionselection');
    if (datum.tag === 'svg') {
      const width = datum.attributes.width.replace(/\D/g, '');
      const height = datum.attributes.height.replace(/\D/g, '');
      const x = 80;
      const y = 10;
      const scale = 2;
      selection.attr('id', 'visual');
      datum.attributes.id = 'visual';
      console.log(width, 'widthwidth');
      console.log(height, 'height');
      console.log(scale, 'ssss');
      selection
          .attr('viewBox', -x + ' ' + -y + ' ' + (width / scale) + ' ' + (height / scale));
      datum.attributes.viewBox = -x + ' ' + -y + ' ' + (width / scale) + ' ' + (height / scale);
      datum.attributes.width = '100%';
      datum.attributes.height = '100%';
    }
  }

  generateGraph(): void {
    const t = d3.transition()
        .delay(100)
        .duration(1000)
        .ease(d3.easeLinear);
    const option = {
      fade: true,
      useWorker: true,
      zoom: true,
      engine: 'dot',
      scale: 1,
      id: 'visual',
    };
    this.graphInstance = graphviz('#graph', option).transition(t).attributer(this.attributer).renderDot(this.dotString);
  }

  zoomIn(): void{
    const panZoomTiger = SvgPanZoom('#visual');
    panZoomTiger.zoomIn();
  }

}
