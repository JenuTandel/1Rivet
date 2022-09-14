import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureComponent } from './structure/structure.component';
import { AttributeComponent } from './attribute/attribute.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StructureComponent,
    AttributeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    StructureComponent,
    AttributeComponent
  ]
})
export class DirectivesModule { }
