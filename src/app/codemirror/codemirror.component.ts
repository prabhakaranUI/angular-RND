import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/xquery/xquery';
import { WindowRef } from './WindowRef';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/sql-hint.js';
import 'codemirror/addon/hint/css-hint.js';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/addon/lint/lint.js';

@Component({
  selector: 'app-codemirror',
  templateUrl: './codemirror.component.html',
  styleUrls: ['./codemirror.component.scss']
})
export class CodemirrorComponent implements OnInit, AfterViewInit  {
  @ViewChild('myEditor') myEditor;
  options = {
    tables: {
            "table1": ["col_A", "col_B", "col_C"],
            "table2": ["other_columns1", "other_columns2"]
          }
  }

  constructor(private winRef: WindowRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let mime = 'text/x-mysql'; //application/xquery //text/x-mariadb
    const currentWindow = this.winRef.nativeWindow;
   // get mime type
    if (currentWindow.location.href.indexOf('mime=') > -1) {
      mime = currentWindow.location.href.substr(currentWindow.location.href.indexOf('mime=') + 5);
    }
    currentWindow.editor = CodeMirror.fromTextArea(this.myEditor.nativeElement, {
      mode: mime,
      indentWithTabs: true,
      smartIndent: true,
      lineNumbers: true,
      autofocus: true,
      extraKeys: { 'Ctrl-Space': 'autocomplete' },
      // hintOptions: this.getHint(),
      fixedGutter: true,
      autocorrect: true,
      spellcheck: true,
      readOnly: false,
      lineWrapping: true,
      theme: 'monokai'
    });

    currentWindow.editor.on('keypress', (editor) => {
      const text = editor.doc.getValue();
      console.log(text, 'text');
    });

    CodeMirror.commands.autocomplete = function (cmeditor) {
      CodeMirror.showHint(cmeditor, CodeMirror.hint.sql, {
        completeSingle: true,
        tables: {
          "table1": ["col_A", "col_B", "col_C"],
          "table2": ["other_columns1", "other_columns2"]
        }
      });
    }
  }

  getHint(options): any{
    CodeMirror.commands.autocomplete = function(cm) {
      CodeMirror.showHint(cm, CodeMirror.hint.sql, options);
    };
  }

}
