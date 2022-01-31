import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDomainModule } from '@my-project/booking/domain';
import { SearchComponent } from './search.component';
//import { BoardingDomainModule } from '@my-project/boarding/domain'

@NgModule({
  imports: [
    CommonModule, 
    BookingDomainModule,
    // BoardingDomainModule
  ],
  declarations: [
    SearchComponent
  ],
  exports: [
    SearchComponent
  ],
})
export class BookingFeatureSearchModule {}
