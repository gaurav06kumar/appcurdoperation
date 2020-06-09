import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo : '/products',                    // loading default page
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: './product/product.module#ProductModule' // product will load module
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
