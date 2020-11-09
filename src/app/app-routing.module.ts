import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedMappingComponent } from './feed-mapping/feed-mapping.component';
import { FileUploadLayoutComponent } from './file-upload-layout/file-upload-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PreviewLayoutComponent } from './preview-layout/preview-layout.component';
import { SecondLayoutComponent } from './second-layout/second-layout.component';


const routes: Routes = [
  {path: 'homepage', component: HomePageComponent},
  {path: 'layout', component: SecondLayoutComponent},
  {path: 'upload', component: FileUploadLayoutComponent},
  {path: 'preview', component: PreviewLayoutComponent },
  {path: 'mapping', component: FeedMappingComponent },
  {path: '', redirectTo: '/homepage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
