import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app.material.module';

import { ProductsRoutingModule } from './products.routing';
import { ProductsComponent } from './products.component';
 
@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
