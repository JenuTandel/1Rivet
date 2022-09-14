import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeComponent } from './directives/attribute/attribute.component';
import { StructureComponent } from './directives/structure/structure.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'attribute',
    component: AttributeComponent
  },
  {
    path: 'structure',
    component: StructureComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
