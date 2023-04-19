import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxScrollTopModule } from 'ngx-scrolltop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { AboutComponent } from './components/layouts/about/about.component';
import { ServicesComponent } from './components/layouts/services/services.component';
import { FeaturesComponent } from './components/layouts/features/features.component';
@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeTwoComponent,
    AboutComponent,
    ServicesComponent,
    FeaturesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxScrollTopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
