import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.scss']
})
export class DocViewerComponent implements OnInit {
  urlDoc = 'assets/files/document.doc';
  urlPdf = 'assets/files/sample.pdf';

  arrayList = [1,2,3,4,5,6,7,8,9,10];
  arrayListTwo = [11,12,13,14,15,16,17,18,19,20];
  constructor() {
    console.log(this.arrayList, 'arrayList');
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.arrayList.push(...this.arrayListTwo);
    }, 10000);
  }
  select(i, event): void{
    if (event.shiftKey) {
      for (const list of this.arrayList) {

      }
    }
  }


}
