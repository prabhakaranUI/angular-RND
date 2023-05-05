import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import { Renderer2, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';
declare const xsltMethod: any;




@Component({
  selector: 'app-xslt',
  templateUrl: './xslt.component.html',
  styleUrls: ['./xslt.component.scss']
})
export class XsltComponent implements OnInit {
  content;
  myScriptElement: HTMLScriptElement;
  scriptFile = '';
  constructor(public sanitizer: DomSanitizer, public httpClient: HttpClient, private renderer2: Renderer2, private elementRef: ElementRef,
              @Inject(DOCUMENT) private document) {
    Window['myComponent'] = this;
  }


  ngOnInit(): void {
    const path = 'assets/xslt.html';
    this.httpClient.get(path, {responseType: 'text'}).subscribe(
        data => {
          this.content = this.sanitizer.bypassSecurityTrustHtml(data);
          this.scriptFile = 'myScript';
          this.loadCustomScript();
        });
  }


  loadCustomScript(): void{
    this.myScriptElement = document.createElement('script');
    this.myScriptElement.src = `assets/js/${this.scriptFile}.js`;
    document.body.appendChild(this.myScriptElement);
  }


  blobView(value): void {
   console.log(value);
  }

}




