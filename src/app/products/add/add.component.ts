import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService, productData, dataFormsItem } from 'src/app/core/data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _dataService: DataService, private router: Router, private snackBar: MatSnackBar) { }

  productForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    width: new FormControl(''),
    height: new FormControl(''),
    issmart: new FormControl(''),
  });

  product: productData;
  dataForms: dataFormsItem[];

  ngOnInit() {
    this.dataForms = this._dataService.getdataForms();
    this.dataForms.forEach((form, index) => {
      if (index == 0 && form.mandatory) {
        this.productForm.controls['name'].setValidators(Validators.required);
      }
      else if (index == 1 && form.mandatory) {
        this.productForm.controls['description'].setValidators(Validators.required);
      }
      else if (index == 2 && form.mandatory) {
        this.productForm.controls['width'].setValidators(Validators.required);
      }
      else if (index == 3 && form.mandatory) {
        this.productForm.controls['height'].setValidators(Validators.required);
      }
      else if (index == 4 && form.mandatory) {
        this.productForm.controls['issmart'].setValidators(Validators.required);
      }
    });
  }

  onSubmit(): void {
    this.product = this.productForm.value;
    this.product.id = Math.round((Math.random() * 36 ** 12)).toString(36);
    if (this._dataService.putProduct(this.product)) {
      this.snackBar.open(this.product.name + ' added successfully!', '', {
        duration: 2500,
      });
      this.productForm.reset();
      this.router.navigate(['/products']);
    }
  }

  onBack(): void {
    this.productForm.reset();
    this.router.navigate(['/products']);
  }
}
