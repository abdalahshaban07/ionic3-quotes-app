import { SettingsService } from './../../services/settings.services';
import { Component } from '@angular/core';
import { Toggle } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingsServ: SettingsService) {

  }

  onToggle(toggle: Toggle) {
    this.settingsServ.setBackGround(toggle.checked)
  }

  checkAltBackground() {
    return this.settingsServ.isAltBackground()
  }

}
