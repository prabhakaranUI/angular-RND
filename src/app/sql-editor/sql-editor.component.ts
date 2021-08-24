import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
// import * as sqlAutocompleteParser from '../../../node_modules/gethue/parse/sql/hive/hiveAutocompleteParser';
import {saveAs} from 'file-saver';

@Component({
    selector: 'app-sql-editor',
    templateUrl: './sql-editor.component.html',
    styleUrls: ['./sql-editor.component.scss']
})
export class SqlEditorComponent implements OnInit {
    @ViewChild('testInput', {static: false}) testInput: ElementRef;

    public text: any;
    public beforeCursor = 'SELECT col1, col2, tbl2.col3 FROM tbl; '; // Note extra space at end
    public afterCursor = '';
    public dialect = 'hive';
    public debug = false;
    options: any = {
        maxLines: 1000,
        printMargin: false,
        enableBasicAutocompletion: [{
            getCompletions: (editor, session, pos, prefix, callback) => {
                // note, won't fire if caret is at a word that does not have these letters
                callback(null, [
                    {value: 'hello', score: 1, meta: 'some comment'},
                    {value: 'world', score: 2, meta: 'some other comment'},
                ]);
            },
        }],
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

    ngOnInit(): void {

    }

    onChange(code): void {
        console.log('new code', code);
    }





}
