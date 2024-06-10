import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as ace from 'ace-builds';

@Component({
  selector: 'app-ace',
  templateUrl: './ace.component.html',
  styleUrls: ['./ace.component.scss']
})
export class AceComponent implements OnInit, AfterViewInit {
  sqlQuery: string = '';
  editorOptions: any = {
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true
  };
  customSnippets: any[] = [
    { caption: 'select', snippet: 'karan' },
    // Add more custom snippets as needed
  ];

  constructor() { 
   
  }

  ngOnInit(): void {
   
  }
  ngAfterViewInit(): void {
    this.createCustomCompleter();
   
  }


  createCustomCompleter(): any{
    ace.require('ace/ext/language_tools').addCompleter({
      getCompletions: (editor: any, session: any, pos: any, prefix: any, callback: any) => {
        callback(null, this.customSnippets.map((snippet) => {
          return {
          caption: snippet.caption,
          snippet: snippet.snippet,
          meta: 'ADS-snippet',
          scope: Number.MAX_VALUE
          }
        }));
      }
    })
  }

}
