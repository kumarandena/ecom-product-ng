import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditDialog {
public d;
  constructor(
    public dialogRef: MatDialogRef<EditDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {
}

onNoClick(): void {
    this.dialogRef.close();
}

}
