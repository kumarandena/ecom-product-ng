import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
    name: string;
    description: string;
    width: string;
    height: string;
    isSmart: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditDialog {

  constructor(
    public dialogRef: MatDialogRef<EditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log("Received data : ", data)
}

onNoClick(): void {
    this.dialogRef.close();
}

}
