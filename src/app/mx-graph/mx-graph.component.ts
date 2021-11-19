import {AfterViewInit, Component, ElementRef, ViewChild, OnInit} from '@angular/core';
declare var mxGraph: any;
declare var mxUtils: any;
declare var mxConstants: any;
declare var mxClient: any;
declare var mxHierarchicalLayout: any;
declare var mxStackLayout: any;
declare var mxLayoutManager: any;


@Component({
    selector: 'app-mx-graph',
    templateUrl: './mx-graph.component.html',
    styleUrls: ['./mx-graph.component.scss']
})
export class MxGraphComponent implements OnInit, AfterViewInit {
    @ViewChild('graphContainer') graphContainer: ElementRef;

    ngAfterViewInit(): void {
        const graph = new mxGraph(this.graphContainer.nativeElement);
        // Checks if the browser is supported
        if (!mxClient.isBrowserSupported())
        {
            // Displays an error message if the browser is not supported.
            mxUtils.error('Browser is not supported!', 200, false);
        }
        else {
            // Enables crisp rendering of rectangles in SVG
            mxConstants.ENTITY_SEGMENT = 20;

            // Creates the graph inside the given container
            graph.setDropEnabled(true);

            // Disables global features
            graph.collapseToPreferredSize = false;
            graph.constrainChildren = false;
            graph.cellsSelectable = false;
            graph.extendParentsOnAdd = false;
            graph.extendParents = false;
            graph.border = 10;
            mxGraph.prototype.collapsedImage = new mxImage('/assets/mxgraph-img/navigate_plus.png', 10, 10);
            mxGraph.prototype.expandedImage = new mxImage('/assets/mxgraph-img/navigate_minus.png', 10, 10);

            // Sets global styles
            var style = graph.getStylesheet().getDefaultEdgeStyle();
            style[mxConstants.STYLE_EDGE] = mxEdgeStyle.EntityRelation;
            style[mxConstants.STYLE_ROUNDED] = true;

            style = graph.getStylesheet().getDefaultVertexStyle();
            style[mxConstants.STYLE_FILLCOLOR] = '#ffffff';
            style[mxConstants.STYLE_SHAPE] = 'swimlane';
            style[mxConstants.STYLE_STARTSIZE] = 30;

            style = [];
            style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
            style[mxConstants.STYLE_STROKECOLOR] = 'none';
            style[mxConstants.STYLE_FILLCOLOR] = 'none';
            style[mxConstants.STYLE_FOLDABLE] = false;
            graph.getStylesheet().putCellStyle('column', style);

            // Installs auto layout for all levels
            var layout = new mxStackLayout(graph, true);
            layout.border = graph.border;
            var layoutMgr = new mxLayoutManager(graph);
            layoutMgr.getLayout = function(cell) {
                if (!cell.collapsed) {
                    if (cell.parent != graph.model.root) {
                        layout.resizeParent = true;
                        layout.horizontal = false;
                        layout.spacing = 10;
                    } else {
                        layout.resizeParent = true;
                        layout.horizontal = true;
                        layout.spacing = 40;
                    }

                    return layout;
                }

                return null;
            };

            // Resizes the container
            graph.setResizeContainer(true);
        }
        try {
            const parent = graph.getDefaultParent();
            graph.getModel().beginUpdate();
            var col1 = graph.insertVertex(parent, null, '', 0, 0, 120, 0, 'column');

            var v1 = graph.insertVertex(col1, null, '1', 0, 0, 100, 30);
            v1.collapsed = true;

            var v11 = graph.insertVertex(v1, null, '1.1', 0, 0, 80, 30);
            v11.collapsed = true;

            var v111 = graph.insertVertex(v11, null, '1.1.1', 0, 0, 60, 30);
            var v112 = graph.insertVertex(v11, null, '1.1.2', 0, 0, 60, 30);

            var v12 = graph.insertVertex(v1, null, '1.2', 0, 0, 80, 30);

            var col2 = graph.insertVertex(parent, null, '', 0, 0, 120, 0, 'column');

            var v2 = graph.insertVertex(col2, null, '2', 0, 0, 100, 30);
            v2.collapsed = true;

            var v21 = graph.insertVertex(v2, null, '2.1', 0, 0, 80, 30);
            v21.collapsed = true;

            var v211 = graph.insertVertex(v21, null, '2.1.1', 0, 0, 60, 30);
            var v212 = graph.insertVertex(v21, null, '2.1.2', 0, 0, 60, 30);

            var v22 = graph.insertVertex(v2, null, '2.2', 0, 0, 80, 30);

            var v3 = graph.insertVertex(col2, null, '3', 0, 0, 100, 30);
            v3.collapsed = true;

            var v31 = graph.insertVertex(v3, null, '3.1', 0, 0, 80, 30);
            v31.collapsed = true;

            var v311 = graph.insertVertex(v31, null, '3.1.1', 0, 0, 60, 30);
            var v312 = graph.insertVertex(v31, null, '3.1.2', 0, 0, 60, 30);

            var v32 = graph.insertVertex(v3, null, '3.2', 0, 0, 80, 30);

            graph.insertEdge(parent, null, '', v1, v211);
            graph.insertEdge(parent, null, '', v1, v212);
            graph.insertEdge(parent, null, '', v1, v22);

            graph.insertEdge(parent, null, '', v1, v311);
            graph.insertEdge(parent, null, '', v1, v312);
            graph.insertEdge(parent, null, '', v1, v32);
        } finally {
            graph.getModel().endUpdate();
            new mxHierarchicalLayout(graph).execute(graph.getDefaultParent());
        }
    }

    ngOnInit(): void {
    }
}
