import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'user',
        loadComponent: () => import('./views/user/user.module').then(m => m.UserModule)
    },
    {
        path: 'product',
        loadComponent: () => import('./views/product/product.module').then(m => m.ProductModule)
    },
    { path: '*', redirectTo: '/' }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }