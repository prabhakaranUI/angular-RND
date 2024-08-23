import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-image-properties',
  templateUrl: './image-properties.component.html',
  styleUrls: ['./image-properties.component.scss']
})
export class ImagePropertiesComponent implements OnInit {
  fileToUpload: any;
  @Output() imageUrl = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  handleFileInput(file: FileList): void {
    this.fileToUpload = file.item(0);
    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl.emit(event.target.result);
    }
    reader.readAsDataURL(this.fileToUpload);
  }

}
