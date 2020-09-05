import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppModule,
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
