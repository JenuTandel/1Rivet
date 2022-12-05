import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudioListComponent } from './studio-list/studio-list.component';
import { StudioComponent } from './studio.component';

const routes: Routes = [
  { 
    path: '', 
    component: StudioComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'studioList'
      },
      {
        path:'studioList',
        component:StudioListComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudioRoutingModule { }
