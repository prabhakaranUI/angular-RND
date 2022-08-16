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
import { NgrxComponent } from './ngrx/ngrx.component';
import { CounterComponent } from './ngrx/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import {counterReducer} from './ngrx/reducer';
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
@NgModule({

  declarations: [
    AppComponent,
    IconPickerComponent,
    ColorShadesComponent,
    SqlEditorComponent,
    ExportHtmlComponent,
    NgrxComponent,
    CounterComponent,
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
    SafeHtmlPipe, HtmlDirective, MetadataTextDisplayComponent, PivotTableComponent, TableVirtualScrollComponent, JsonStructureComponent, TopologyComponent

  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    StoreModule.forRoot({count: counterReducer}),
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

    MatDialogModule,
    MatCardModule,
    MatListModule,
    MaterialDualListboxModule,
    MatTreeModule,
    NgxDocViewerModule,
    ContextMenuModule.forRoot(),
    NgxDomarrowModule,
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
    NgxJsonViewerModule

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
