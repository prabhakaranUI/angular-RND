import { Component, OnInit, AfterViewInit, ViewEncapsulation, ElementRef, Renderer2, Inject} from '@angular/core';
import {Renderer} from '@angular/compiler-cli/ngcc/src/rendering/renderer';
import {DOCUMENT} from '@angular/common';
import {DomSanitizer} from '@angular/platform-browser';
declare var viewInit: any;
declare var xsltforms_init: any;
declare var XsltForms_typeDefs: any;
declare var  XsltForms_globals: any;


@Component({
  selector: 'app-xform',
  templateUrl: './xform.component.html',
  styleUrls: ['./xform.component.scss']
})
export class XformComponent implements OnInit, AfterViewInit {
  htmlView: any = '';
  isScriptEnable = true;
  queryText = '<xforms-model>\n' +
      '      <xforms-instance>\n' +
      '        <script type="application/xml">\n' +
      '          <data xmlns="">\n' +
      '            <PersonGivenName/>\n' +
      '          </data>\n' +
      '        </script>\n' +
      '      </xforms-instance>\n' +
      '    </xforms-model>\n' +
      '    <p>Type your first name in the input box. <br>\n' +
      '      If you are running XForms, the output should be displayed in the output area.</p>\n' +
      '    <xforms-input xf-ref="PersonGivenName" xf-incremental="true">\n' +
      '      <xforms-label>Please enter your first name: </xforms-label>\n' +
      '    </xforms-input>\n' +
      '    <br>\n' +
      '    <xforms-output xf-value="concat(\'Hello \', PersonGivenName, \'. We hope you like XForms!\')">\n' +
      '      <xforms-label>Output: </xforms-label>\n' +
      '    </xforms-output>'
  options: any = {
    maxLines: 1000,
    printMargin: false,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
  };
  constructor(@Inject(DOCUMENT) private document: Document,
              private renderer: Renderer2, private domSanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }

  public loadScript(): void {
    this.isScriptEnable = false;
    const body = document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.id = 'XSLTform';
    script.src = '../../assets/js/xsltforms.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);

  }

  viewxform(): void {
    XsltForms_globals.close();
    XsltForms_typeDefs.initAll();
    setTimeout(() => {
      viewInit();
    });
    this.htmlView = this.domSanitizer.bypassSecurityTrustHtml(this.queryText);
  }
}
