import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CanvasDomModule } from 'angular-canvas';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { IconPickerModule } from 'ngx-icon-picker';
import { NgxIconPickrModule } from 'ngx-icon-pickr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IconPickerComponent } from './icon-picker/icon-picker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ColorShadesComponent } from './color-shades/color-shades.component';
import { SqlEditorComponent } from './sql-editor/sql-editor.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { ExportHtmlComponent } from './export-html/export-html.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {MatSelectModule} from '@angular/material/select';
import { NgSelectModule } from '@ng-select/ng-select';
import { StoreModule } from '@ngrx/store';
import { MxGraphComponent } from './mx-graph/mx-graph.component';
import { VizComponent } from './viz/viz.component';
import { SuburstComponent } from './suburst/suburst.component';
import { CodemirrorComponent } from './codemirror/codemirror.component';
import {WindowRef} from './codemirror/WindowRef';
import { CrudComponent } from './crud/crud.component';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { AddEditUserComponent } from './crud/add-edit-user/add-edit-user.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SplitResizeComponent } from './split-resize/split-resize.component';
import { CanvasComponent } from './canvas/canvas.component';
import { NgxCanvasModule } from 'ngx-canvas';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { NgxResizableModule } from '@3dgenomes/ngx-resizable';
import { NinjaSplitterModule } from 'ninja-splitter';
import {MaterialDualListboxModule} from 'material-dual-listbox';
import { SvgComponent } from './svg/svg.component';
import { QueryBuilderComponent } from './query-builder/query-builder.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import { ContextmenuComponent } from './query-builder/contextmenu/contextmenu.component';
import {ContextMenuModule} from 'ngx-contextmenu';
// import { MonacoEditorModule } from 'ngx-monaco-editor';
import { NgxDomarrowModule } from 'ngx-domarrow';
import {NgxDocViewerModule} from 'ngx-doc-viewer';
import { DocViewerComponent } from './doc-viewer/doc-viewer.component';
import { CustomPresentationComponent } from './custom-presentation/custom-presentation.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {SafeHtmlPipe} from './custom-presentation/safe-html.pipe';
import {HtmlDirective} from './custom-presentation/safeHtml.directive';
import { MetadataTextDisplayComponent } from './metadata-text-display/metadata-text-display.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import {DatePipe} from '@angular/common';
import {PopoverModule} from 'ngx-smart-popover';
import { NgxOrgChartModule } from 'ngx-org-chart';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgxDCModule } from 'ngx-dynamic-compiler';
import {MatMenuModule} from '@angular/material/menu';



import {
  Compiler,
  CompilerFactory,
  CompilerOptions,
  COMPILER_OPTIONS,
  ViewEncapsulation,
  StaticProvider
} from '@angular/core';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { PivotTableComponent } from './pivot-table/pivot-table.component';
import { TableVirtualScrollComponent } from './table-virtual-scroll/table-virtual-scroll.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { JsonStructureComponent } from './json-structure/json-structure.component';
import { TopologyComponent } from './topology/topology.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { PopoverComponent } from './popover/popover.component';
import { TreeChartComponent } from './tree-chart/tree-chart.component';
import { JsonAccordionComponent } from './json-accordion/json-accordion.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NestedTableComponent } from './nested-table/nested-table.component';
import { ChangeDetetionComponent } from './change-detetion/change-detetion.component';
import { ParentComponent } from './change-detetion/parent/parent.component';
import { ChildComponent } from './change-detetion/parent/child/child.component';
import { DynamicDatatableComponent } from './dynamic-datatable/dynamic-datatable.component';
import { D3Component } from './d3/d3.component';
import { XsltComponent } from './xslt/xslt.component';
import { MultidragComponent } from './multidrag/multidrag.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { ImageBoundingBoxComponent } from './image-bounding-box/image-bounding-box.component';
import { XformComponent } from './xform/xform.component';
import { EtlCanvaseComponent } from './etl-canvase/etl-canvase.component';
import { SvgPathComponent } from './etl-canvase/svg-path/svg-path.component';
@NgModule({

  declarations: [
    AppComponent,
    IconPickerComponent,
    ColorShadesComponent,
    SqlEditorComponent,
    ExportHtmlComponent,
    MxGraphComponent,
    VizComponent,
    SuburstComponent,
    CodemirrorComponent,
    CrudComponent,
    AddEditUserComponent,
    SplitResizeComponent,
    CanvasComponent,
    SvgComponent,
    QueryBuilderComponent,
    ContextmenuComponent,
    DocViewerComponent,
    CustomPresentationComponent,
    SafeHtmlPipe, HtmlDirective, MetadataTextDisplayComponent, PivotTableComponent, TableVirtualScrollComponent, JsonStructureComponent, TopologyComponent, PopoverComponent, TreeChartComponent, JsonAccordionComponent, NestedTableComponent, ChangeDetetionComponent, ParentComponent, ChildComponent, DynamicDatatableComponent, XsltComponent, MultidragComponent, VideoplayerComponent, ImageBoundingBoxComponent, XformComponent, EtlCanvaseComponent, SvgPathComponent

  ],
  imports: [
    BrowserModule,
    NgxDCModule,
    FlexLayoutModule,
    IconPickerModule,
    CanvasDomModule,
    NgxIconPickrModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    NgxResizableModule,
    MatButtonModule,
    DragDropModule,
    AceEditorModule,
    NgxMatSelectSearchModule,
    MatAutocompleteModule,
    HttpClientModule,
    NgSelectModule,
    MatSelectModule,
    NinjaSplitterModule,
    PopoverModule,
    MatDialogModule,
    MatCardModule,
    MatListModule,
    MaterialDualListboxModule,
    MatTreeModule,
    NgxDocViewerModule,
    ContextMenuModule.forRoot(),
    NgxDomarrowModule,
    MatExpansionModule,
    MatTabsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    MatMenuModule,


    // MonacoEditorModule.forRoot(),
    NgxCanvasModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    FormsModule,
    MatPaginatorModule,
    ScrollingModule,
    MatTableModule,
    TableVirtualScrollModule,
    MatProgressBarModule,
    NgxJsonViewerModule,
    NgxOrgChartModule,
    MatCheckboxModule,
    MatTooltipModule

  ],
  providers: [
    DatePipe,
    WindowRef,
    {
      provide: COMPILER_OPTIONS,
      useValue: {
        useJit: true,
        defaultEncapsulation: ViewEncapsulation.None
      },
      multi: true
    },
    {
      provide: CompilerFactory,
      useClass: JitCompilerFactory,
      deps: [COMPILER_OPTIONS]
    },
    {
      provide: Compiler,
      useFactory: (compilerFactory: CompilerFactory) =>
          compilerFactory.createCompiler([
            {
              useJit: true,
              defaultEncapsulation: ViewEncapsulation.None
            }
          ]),
      deps: [CompilerFactory]
    }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
