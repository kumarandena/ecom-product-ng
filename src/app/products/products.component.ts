import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditDialog } from './edit/edit.component';
import { MatSnackBar } from '@angular/material';
import { DataService, productData } from '../core/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: productData[];

  constructor(private _dataService: DataService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

  openDialog(index: string, product: productData): void {
    const dialogRef = this.dialog.open(EditDialog, {
      width: '250px',
      data: { n: product.name, i: product.isSmart ? 'Yes' : 'No', d: product.description, w: product.width, h: product.height }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.products[index].description = result.d;
        this.products[index].isSmart = result.i == "Yes" ? true : false;
        this.products[index].width = result.w;
        this.products[index].height = result.h;
        this.snackBar.open(result.n + ' updated successfully!', '', {
          duration: 2500,
        });
      }
    });
  }

  ngOnInit() {
    this.products = this._dataService.getProducts();
  }

  onDelete(i: number, name: string): void {
    this.products.splice(i, 1);
    this.snackBar.open(name + ' deleted successfully!', '', {
      duration: 2000,
    });
  }
}

