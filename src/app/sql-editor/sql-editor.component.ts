import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
// import * as sqlAutocompleteParser from '../../../node_modules/gethue/parse/sql/hive/hiveAutocompleteParser';
import {saveAs} from 'file-saver';



@Component({
    selector: 'app-sql-editor',
    templateUrl: './sql-editor.component.html',
    styleUrls: ['./sql-editor.component.scss']
})
export class SqlEditorComponent implements OnInit, AfterViewInit {
    @ViewChild('testInput', {static: false}) testInput: ElementRef;
    @ViewChild('editor', {static: false}) editor;
    public text: any;
    public beforeCursor = 'SELECT col1, col2, tbl2.col3 FROM tbl; '; // Note extra space at end
    public afterCursor = '';
    public dialect = 'hive';
    public debug = false;
    public wordList: any[] = [];
    options: any = {
        maxLines: 1000,
        printMargin: false,
          enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    };

//   enableBasicAutocompletion: [{
//     getCompletions: (editor, session, pos, prefix, callback) => {
//       // note, won't fire if caret is at a word that does not have these letters
//       callback(null, [
//           {value: 'hello', score: 1, meta: 'some comment'},
//           {value: 'world', score: 2, meta: 'some other comment'},
//     ]);
//   },
// }],
    constructor() {
    }
    getColumn(): void{
        console.log(this.editor.completer.popup, 'editor.completer.popup');
    }

    ngAfterViewInit(): void {
        this.editor.getEditor().setOptions({
            showLineNumbers: true,
            tabSize: 2
        });

        this.editor.mode = 'javascript';
        this.editor.value = `function testThis() {
  console.log("it's working!")
}`;
    }

    ngOnInit(): void {

    }

    onChange(code): void {
        console.log('new code', code);
    }





}
