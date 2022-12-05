import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './core/component/master/master.component';
import { AuthGuard } from './core/guard/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:MasterComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
      },
      {
        path:'home',
        component:HomeComponent,
      }
    ]
  },
  { path: 'login', loadChildren: () => import('./user/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
