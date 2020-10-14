import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SideToolbarComponent } from './side-toolbar/side-toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { FirstLayoutComponent } from './first-layout/first-layout.component';
import { SecondLayoutComponent } from './second-layout/second-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SideToolbarComponent,
    DashboardComponent,
    HeaderComponent,
    SelectBoxComponent,
    FirstLayoutComponent,
    SecondLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
