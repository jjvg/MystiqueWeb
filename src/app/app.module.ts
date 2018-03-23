import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroComponent } from './hero/hero.component';
import { ServicespanelComponent } from './servicespanel/servicespanel.component';
import { ClientreviewComponent } from './clientreview/clientreview.component';
import { EmployeesComponent } from './employees/employees.component';
import { PromoComponent } from './promo/promo.component';
import { BlogComponent } from './blog/blog.component';
import { TwittertimelineComponent } from './twittertimeline/twittertimeline.component';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib/index';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HeroComponent,
    ServicespanelComponent,
    ClientreviewComponent,
    EmployeesComponent,
    PromoComponent,
    BlogComponent,
    TwittertimelineComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    Ng4TwitterTimelineModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
