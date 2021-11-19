import { mxgraph } from 'mxgraph'; // Typings only - no code!
declare var require: any;

/**
 *  init mxGraph whith a config object
 */
const mx: typeof mxgraph = require('mxgraph')({
    // mxgraph assets base path
    mxBasePath: 'assets/mxgraph',
    // mxgraph images
    mxImageBasePath: 'assets/mxgraph/images',
    // avoid mxgraph resources load
    mxLoadResources: false,
    mxForceIncludes: false

});

// Objects load in window object
// The original library load, loads object into the window object, this is necesray if you use
// the decode and encode models funcionality of mxgraph. Is necesary that you include all object you
// use into your models. this is only my case.
window['mxGraphModel'] = mx.mxGraphModel;
window['mxGeometry'] = mx.mxGeometry;
window['MxGeometry'] = mx.mxGeometry;
window['MxPoint'] = mx.mxPoint;
window['mxPoint'] = mx.mxPoint;

/**
 * Into MXUTILITIES exports all the object created by mxgraph as staric properties as we need
 **/
export class MXUTILITIES {
    static mxEvent = mx.mxEvent;
    static mxUtils = mx.mxUtils;
    static mxConstants = mx.mxConstants;
    static mxStencilRegistry = mx.mxStencilRegistry;
    static mxPerimeter = mx.mxPerimeter;
    static mxEdgeStyle = mx.mxEdgeStyle;
    static mxEffects = mx.mxEffects;
    static mxClient = mx.mxClient;
    static mxCodecRegistry = mx.mxCodecRegistry;

}

/**
 * Exports for all classes we need extending mxgrah, you can extend, overwrite methods and so on
 *
 */
export class MxGraphModel extends mx.mxGraphModel {}
export class MxOutline extends mx.mxOutline { }
export class MxKeyHandler extends mx.mxKeyHandler { }
export class MxCompactTreeLayout extends mx.mxCompactTreeLayout { }
export class MxLayoutManager extends mx.mxLayoutManager { }
export class MxDivResizer extends mx.mxDivResizer { }
export class MxCellOverlay extends mx.mxCellOverlay { }
export class MxImage extends mx.mxImage { }
export class MxEdgeHandler extends mx.mxEdgeHandler { }
export class MxPrintPreview extends mx.mxPrintPreview { }
export class MxWindow extends mx.mxWindow { }
export class MxGraphView extends mx.mxGraphView { }
export class MxGraphHandler extends mx.mxGraphHandler { }
export class MxGraphSelectionModel extends mx.mxGraphSelectionModel { }
export class MxToolbar extends mx.mxToolbar { }
export class MxEventObject extends mx.mxEventObject { }
export class MxCodec extends mx.mxCodec { }
export class MxObjectCodec extends mx.mxObjectCodec { }
export class MxFastOrganicLayout extends mx.mxFastOrganicLayout { }
export class MxGeometry extends mx.mxGeometry { }
export class MxHierarchicalLayout extends mx.mxHierarchicalLayout { }
export class MxStencil extends mx.mxStencil { }
export class MxRubberband extends mx.mxRubberband { }
export class MxCellRenderer extends mx.mxCellRenderer { }
export class MxPoint extends mx.mxPoint { }
export class MxConnector extends mx.mxConnector { }
export class MxLine extends mx.mxLine { }
export class MxArrowConnector extends mx.mxArrowConnector { }
export class MxCell extends mx.mxCell {}
export class MxGraph extends mx.mxGraph {}
