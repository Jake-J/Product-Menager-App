import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent }      from './products/products.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { Distributor } from './distributor';
import { DistributorsComponent } from './distributors/distributors.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: DashboardComponent },
  { path: 'distributors', component: DistributorsComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}