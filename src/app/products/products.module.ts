import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app.material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products.routing';
import { ProductsComponent } from './products.component';
import { AddComponent } from './add/add.component';
import { EditDialog } from './edit/edit.component';
 
@NgModule({
  declarations: [
    ProductsComponent,
    AddComponent,
    EditDialog
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    ProductsRoutingModule,
  ],
  entryComponents: [EditDialog]
})
export class ProductsModule { }
