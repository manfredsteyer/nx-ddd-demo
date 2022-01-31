import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CheckinFeatureUpgradeModule } from '@my-project/checkin/feature-upgrade';
import { HttpClientModule } from '@angular/common/http';
import { CheckinFeatureManageModule } from '@my-project/checkin/feature-manage';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    CheckinFeatureUpgradeModule,
    HttpClientModule,
    CheckinFeatureManageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
