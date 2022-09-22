import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives.component';
import { StructureComponent } from './structure/structure.component';
import { AttributeComponent } from './attribute/attribute.component';
import { FormsModule } from '@angular/forms';
import { FontStyleDirective } from '../shared/directives/directive-style/font-style.directive';
import { SharedModule } from '../shared/shared.module';
import { CustomComponent } from './custom/custom.component';

@NgModule({
  declarations: [
    DirectivesComponent,
    StructureComponent,
    AttributeComponent,
    CustomComponent,
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    FormsModule,
    SharedModule
  ],
  // exports:[
  //   StructureComponent,
  //   AttributeComponent
  // ]
})
export class DirectivesModule { }
