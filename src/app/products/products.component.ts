import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: {name: string, isSmart: boolean, desc: string, height: number, width: number}[] = [
    {name: "Mi LED Smart TV 4A Pro", isSmart: true, desc: "Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.", height: 24.5, width: 43.6},
    {name: "Mi LED Smart TV 4A Pro", isSmart: false, desc: "Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.", height: 24.5, width: 43.6},
    {name: "Mi LED Smart TV 4A Pro", isSmart: true, desc: "Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.", height: 24.5, width: 43.6},
    {name: "Mi LED Smart TV 4A Pro", isSmart: true, desc: "Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.", height: 24.5, width: 43.6},
    {name: "Mi LED Smart TV 4A Pro", isSmart: true, desc: "Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.", height: 24.5, width: 43.6},
    {name: "Mi LED Smart TV 4A Pro", isSmart: true, desc: "Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.", height: 24.5, width: 43.6},
    {name: "Mi LED Smart TV 4A Pro", isSmart: true, desc: "Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.", height: 24.5, width: 43.6},
    {name: "Mi LED Smart TV 4A Pro", isSmart: true, desc: "Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.", height: 24.5, width: 43.6},
    {name: "Mi LED Smart TV 4A Pro", isSmart: true, desc: "Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.", height: 24.5, width: 43.6},
    {name: "Mi LED Smart TV 4A Pro", isSmart: true, desc: "Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.", height: 24.5, width: 43.6},
    {name: "Mi LED Smart TV 4A Pro", isSmart: true, desc: "Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.", height: 24.5, width: 43.6},
    {name: "Mi LED Smart TV 4A Pro", isSmart: true, desc: "Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.", height: 24.5, width: 43.6},
    {name: "Mi LED Smart TV 4A Pro", isSmart: true, desc: "Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.", height: 24.5, width: 43.6},
    {name: "Mi LED Smart TV 4A Pro", isSmart: true, desc: "Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.", height: 24.5, width: 43.6}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
