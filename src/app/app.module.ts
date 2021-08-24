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



@NgModule({
  declarations: [
    AppComponent,
    IconPickerComponent,
    ColorShadesComponent,
    SqlEditorComponent,
    ExportHtmlComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    IconPickerModule,
    NgxIconPickrModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    AceEditorModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
