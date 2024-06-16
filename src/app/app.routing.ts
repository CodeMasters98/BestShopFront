import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'Product2',
      redirectTo: 'product',
      pathMatch: 'full'
    },
    // {
    //   path: 'Exit',
    //   component: ExitComponent,
    //   data: {
    //     title: 'صفحه خروج'
    //   }
    // },
    {
      path: '',
      //component: DefaultLayoutComponent,
      data: {
        title: 'خانه'
      },
      //canActivate: [AuthGuard],
      children: [
        {
          path: '',
          loadChildren: () => import('./views/landing/landing.module').then(m => m.LandingModule)
        },
        {
          path: 'User',// /User/Login
          loadChildren: () => import('./views/user/user.module').then(m => m.UserModule)
        },
        {
          path: 'Product',
          loadChildren: () => import('./views/product/product.module').then(m => m.ProductModule)
        }
      ]
    },
    //{ path: '**', component: P404Component }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }