import {AfterViewInit, OnInit, Component, NgModule, ViewChild, ViewContainerRef, ElementRef} from '@angular/core';
import {Compiler} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import {DynamicTemplate, RuntimeCompilerService} from './runtime-compailer.service';


@Component({
  selector: 'app-custom-presentation',
  templateUrl: './custom-presentation.component.html',
  styleUrls: ['./custom-presentation.component.scss']
})
export class CustomPresentationComponent implements OnInit {
  array = [1, 2];
  text = '<div *ngFor="let list of context.array"> {{list}}</div>';
  dynamicTemplate: DynamicTemplate;

  generate(): void {
    this.runtimeCompilerService.createAndCompileTemplate(this, this.text).then(data => {
      this.dynamicTemplate = data;
    });
  }


  constructor(private runtimeCompilerService: RuntimeCompilerService) {

  }

  ngOnInit(): void {
  }

}
