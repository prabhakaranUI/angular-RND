import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {
userForm: FormGroup
  constructor( public dialogRef: MatDialogRef<AddEditUserComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any, public fb: FormBuilder) {
  this.userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required]
  });

  }

  ngOnInit(): void {
  }

}
