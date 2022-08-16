import { Component, OnInit } from '@angular/core';
import {CrudService} from './crud.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddEditUserComponent} from './add-edit-user/add-edit-user.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  displayedColumns: string[] = ['PersonID', 'FirstName', 'LastName', 'Address', 'Edit', 'Delete'];
  dataSource: any;
  constructor(public crudService: CrudService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList(): void{
    this.crudService.usersList().subscribe(res => {
     this.dataSource = res.result;
    }, error => {
      console.log(error);
    });
  }

  deleteUser(id): void{
    this.crudService.deleteUsers(id).subscribe(res => {
      this.getUsersList();
    }, error => {
      console.log(error);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditUserComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.addUser(result);
    });
  }

  addUser(param): void{
    this.crudService.addUsers(param).subscribe(res => {
      this.getUsersList();
    }, error => {
      console.log(error);
    });
  }


}
