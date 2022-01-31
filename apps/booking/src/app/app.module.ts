import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BookingFeatureSearchModule } from '@my-project/booking/feature-search';
import { HttpClientModule } from '@angular/common/http';
import { BookingFeatureManageModule } from '@my-project/booking/feature-manage';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    BookingFeatureSearchModule,
    HttpClientModule,
    BookingFeatureManageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
