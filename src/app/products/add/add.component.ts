import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(fb: FormBuilder) { }

  myForm = new FormGroup({
    name: new FormControl('', [
    ]),
    description: new FormControl('', [
    ]),
    height: new FormControl('', [
    ]),
    width: new FormControl('', [
    ]),
    issmart: new FormControl('', [
    ])
  });

  ngOnInit() {
  }

  onSubmit(): void {
    console.log("values : ", this.myForm.value)
  }
}
