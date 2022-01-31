import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardingDomainModule } from '@my-project/boarding/domain';
import { ManageComponent } from './manage.component';

@NgModule({
  imports: [CommonModule, BoardingDomainModule],
  declarations: [ManageComponent],
  exports: [ManageComponent],
})
export class BoardingFeatureManageModule {}
