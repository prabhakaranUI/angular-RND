import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-icon-picker',
  templateUrl: './icon-picker.component.html',
  styleUrls: ['./icon-picker.component.scss']
})
export class IconPickerComponent implements OnInit {
  public myFormGroup: FormGroup;
  iconCssMat = new FormControl();
  iconCss = new FormControl();
  isFontawesome: boolean;
  name = 'Ngx Icon Picker';
  value = 'fa fa-icon fa-star';
  fallbackIconMat = 'explore';
  fontawesome = ['fab', 'far', 'fas'];
  constructor() {
    this.isFontawesome = false
    this.myFormGroup = new FormGroup({iconCss: this.iconCss,  iconCssMat: this.iconCssMat});
  }

  ngOnInit(): void {
  }

  onIconPickerMatSelect(icon: string): void {
    this.isFontawesome = this.fontawesome.includes(icon.split(' ')[0]);
    this.iconCssMat.patchValue(icon);
  }
  }
