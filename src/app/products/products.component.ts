import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditDialog } from './edit/edit.component';
import { MatSnackBar } from '@angular/material';

export interface productData {
  name: string;
  description: string;
  width: string;
  height: string;
  isSmart: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: { id: string, name: string, isSmart: boolean, description: string, height: number, width: number }[] = [
    { id: '', name: "Mi LED Smart TV 4A Pro", isSmart: true, description: "Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.", height: 24.5, width: 43.6 },
    { id: '', name: "Mi LED Smart TV 4A Pro", isSmart: false, description: "Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.", height: 24.5, width: 43.6 },
    { id: '', name: "Mi", isSmart: true, description: "Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.", height: 24.5, width: 43.6 },
    { id: '', name: "Mi LED Smart TV 4A Pro", isSmart: true, description: "Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.", height: 24.5, width: 43.6 },
    { id: '', name: "Mi LED Smart TV 4A Pro", isSmart: false, description: "Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.", height: 24.5, width: 43.6 },
    { id: '', name: "Mi", isSmart: true, description: "Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.", height: 24.5, width: 43.6 },
  ];

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) { }

  openDialog(index: string, product: productData): void {
    console.log("index : ", index, product)
    // let dat = this.products.filter((product) => product.id === id)[0];
    // console.log("filtered data ", dat)
    const dialogRef = this.dialog.open(EditDialog, {
      width: '250px',
      data: { n: product.name, i: product.isSmart ? 'Yes' : 'No', d: product.description, w: product.width, h: product.height }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.products[index].description = result.d;
      this.products[index].isSmart = result.i == "Yes" ? true : false;
      this.products[index].width = result.w;
      this.products[index].height = result.h;
      this.snackBar.open(result.n + ' updated successfully!', '', {
        duration: 2500,
      });
    });
  }

  ngOnInit() {
    // this.products.forEach(pro => {
    //   pro.id = Math.round((Math.random() * 36 ** 12)).toString(36);
    //   console.log("unique ", pro.id)
    // })
  }

  onDelete(i: number, name: string): void {
    this.products.splice(i, 1);
    this.snackBar.open(name + ' deleted successfully!', '', {
      duration: 2000,
    });
  }
}

