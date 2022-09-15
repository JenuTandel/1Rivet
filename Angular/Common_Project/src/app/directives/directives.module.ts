import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { StructureComponent } from './structure/structure.component';
import { AttributeComponent } from './attribute/attribute.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DirectivesComponent,
    StructureComponent,
    AttributeComponent,
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    FormsModule
    
  ],
  // exports:[
  //   StructureComponent,
  //   AttributeComponent
  // ]
})
export class DirectivesModule { }
