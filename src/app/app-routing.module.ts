import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondLayoutComponent } from './second-layout/second-layout.component';


const routes: Routes = [
  {path: 'homepage', component: SecondLayoutComponent},
  {path: '', redirectTo: '/homepage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
