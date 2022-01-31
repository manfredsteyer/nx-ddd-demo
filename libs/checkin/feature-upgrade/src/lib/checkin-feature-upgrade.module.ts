import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckinDomainModule } from '@my-project/checkin/domain';
import { UpgradeComponent } from './upgrade.component';

@NgModule({
  imports: [CommonModule, CheckinDomainModule],
  declarations: [UpgradeComponent],
  exports: [UpgradeComponent],
})
export class CheckinFeatureUpgradeModule {}
