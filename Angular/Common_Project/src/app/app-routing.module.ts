import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeComponent } from './directives/attribute/attribute.component';
import { StructureComponent } from './directives/structure/structure.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomPipeComponent } from './pipes/custom-pipe/custom-pipe.component';
import { InbuiltPipeComponent } from './pipes/inbuilt-pipe/inbuilt-pipe.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  // {
  //   path: 'attribute',
  //   component: AttributeComponent
  // },
  // {
  //   path: 'structure',
  //   component: StructureComponent
  // },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'inbuiltpipe',
    component: InbuiltPipeComponent
  },
  {
    path: 'custompipe',
    component: CustomPipeComponent,
  },

  { path: 'directives', loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule) },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule) },
  
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
