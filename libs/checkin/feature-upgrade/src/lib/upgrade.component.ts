import { Component, OnInit } from '@angular/core';
import { UpgradeFacade } from '@my-project/checkin/domain';

@Component({
  selector: 'checkin-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss'],
})
export class UpgradeComponent implements OnInit {
  constructor(private upgradeFacade: UpgradeFacade) {}

  ngOnInit() {}
}
