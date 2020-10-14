import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadLayoutComponent } from './file-upload-layout/file-upload-layout.component';
import { SecondLayoutComponent } from './second-layout/second-layout.component';


const routes: Routes = [
  {path: 'homepage', component: SecondLayoutComponent},
  {path: 'upload', component: FileUploadLayoutComponent},
  {path: '', redirectTo: '/homepage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
