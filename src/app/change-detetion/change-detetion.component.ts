import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detetion',
  templateUrl: './change-detetion.component.html',
  styleUrls: ['./change-detetion.component.scss']
})
export class ChangeDetetionComponent implements OnInit {
  localUrl: any[];
  constructor() { }

  ngOnInit(): void {
  }

  showPreviewImage(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: Event) => {
          const errmsg = (e.target as any).result;
          console.log(errmsg, 'errmsg');
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
