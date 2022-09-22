import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeComponent } from './attribute/attribute.component';
import { CustomComponent } from './custom/custom.component';
import { DirectivesComponent } from './directives.component';
import { StructureComponent } from './structure/structure.component';

const routes: Routes = [
  { 
    path: '', 
    component: DirectivesComponent,

    children:[
      // {
      //   path:'',
      //   pathMatch:'full',
      //   redirectTo:'structure'
      // },
      {
        path:'attribute',
        component: AttributeComponent
      },
      {
        path:'structure',
        component:StructureComponent
      },
      {
        path:'custom',
        component: CustomComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
