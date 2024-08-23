import { Component, OnInit } from '@angular/core';
import {DndDropEvent} from 'ngx-drag-drop';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-pdf-builder',
  templateUrl: './pdf-builder.component.html',
  styleUrls: ['./pdf-builder.component.scss']
})
export class PdfBuilderComponent implements OnInit {
  public widgets = {
    templates: [
      { type: "Image", id: 1, icon: "image"},
      { type: "Text", id: 2, icon: "title"},
      { type: "Table", id: 3, icon: "table_chart"},
      { type: "Table", id: 3, icon: "table_chart"}
    ]
  };

  container: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  exportAsPDF()
  {
    let data: any = document.getElementById('designer');  
    html2canvas(data).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jsPDF('l', 'cm', 'a4'); //Generates PDF in landscape mode
      // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);  
      pdf.save('Filename.pdf');   
    }); 
  }

  
  onDragStart(event:DragEvent) {

    console.log("drag started", JSON.stringify(event, null, 2));
  }
  
  onDragEnd(event:DragEvent) {
    
    console.log("drag ended", JSON.stringify(event, null, 2));
  }
  
  onDraggableCopied(event:DragEvent) {
    
    console.log("draggable copied", JSON.stringify(event, null, 2));
  }
  
  onDraggableLinked(event:DragEvent) {
      
    console.log("draggable linked", JSON.stringify(event, null, 2));
  }
    
  onDraggableMoved(event:DragEvent) {
    
    console.log("draggable moved", JSON.stringify(event, null, 2));
  }
      
  onDragCanceled(event:DragEvent) {
    
    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }
  
  onDragover(event:DragEvent) {
    
    console.log("dragover", JSON.stringify(event, null, 2));
  }
  
  onDrop(event:DndDropEvent) {
    if (event && event.data) {
      this.container.push(event);
      console.log(  this.container)
      
    }
  
    console.log("dropped", JSON.stringify(event, null, 2));
    
  }


  onDataChange(event): void{
     console.log(event)
  }

  selectedWidget(item): void {
    console.log(item)
  }


}
