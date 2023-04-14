import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'supplier',loadChildren:()=> import('./supplier/supplier.module').then(el=>el.SupplierModule)},
  {path:'customer',loadChildren:()=> import('./customer/customer.module').then(el=>el.CustomerModule)},
  {path:'products',loadChildren:()=> import('./products/products.module').then(el=>el.ProductsModule)},
  {path:'',redirectTo:'/customer',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
