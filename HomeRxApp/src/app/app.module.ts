import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VideoComponent } from './video/video.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WhyHomeComponent } from './why-home/why-home.component';
import { SupportComponent } from './support/support.component';
import { FooterComponent } from './footer/footer.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

import * as $ from 'jquery';
import { CarouselComponent } from './carousel/carousel.component';
import { WhatPeopleSayComponent } from './what-people-say/what-people-say.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { WhatProblemComponent } from './what-problem/what-problem.component';
import { HomerxForComponent } from './homerx-for/homerx-for.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { HomerxReportComponent } from './homerx-report/homerx-report.component';
import { StickyHeaderComponent } from './sticky-header/sticky-header.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoComponent,
    ContactCardComponent,
    ContactUsComponent,
    WhatWeDoComponent,
    WhyHomeComponent,
    SupportComponent,
    FooterComponent,
    CarouselComponent,
    WhatPeopleSayComponent,
    HomeSectionComponent,
    WhatProblemComponent,
    HomerxForComponent,
    HowItWorksComponent,
    HomerxReportComponent,
    StickyHeaderComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
