import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { IconPickerModule } from 'ngx-icon-picker';
import { NgxIconPickrModule } from 'ngx-icon-pickr';
import { ReactiveFormsModule } from '@angular/forms';
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
    CodemirrorComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    StoreModule.forRoot({ count: counterReducer }),
    IconPickerModule,
    NgxIconPickrModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    AceEditorModule,
    NgxMatSelectSearchModule,
    MatAutocompleteModule,
    NgSelectModule,
    MatSelectModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [WindowRef],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
