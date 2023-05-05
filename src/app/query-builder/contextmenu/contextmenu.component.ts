import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.scss']
})
export class ContextmenuComponent implements OnInit {
  @Input() x = 0;
  @Input() y = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
