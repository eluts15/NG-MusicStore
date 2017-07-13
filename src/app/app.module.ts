import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    MarketplaceComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
