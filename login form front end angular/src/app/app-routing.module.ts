import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/default',pathMatch:'full'},
  {
  path: 'auth',
  loadChildren: () => import('./module/auth/auth.module').then(m => m.AuthModule)
},
  {
   path: 'default',
  loadChildren: () => import('./module/default/default.module').then(m => m.DefaultModule)
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
