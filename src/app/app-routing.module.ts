import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApparatenComponent } from './apparaten/apparaten.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApparaatDetailComponent } from './apparaat-detail/apparaat-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ApparaatDetailComponent },
  { path: 'apparaten', component: ApparatenComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
