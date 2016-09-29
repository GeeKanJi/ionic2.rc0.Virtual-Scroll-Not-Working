import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'contact.html'
})
export class ContactPage {

  public items: Array<string> = [];

  constructor(public navCtrl: NavController) {
    for(let i = 0; i < 100; i++)
    {
      this.items.push('name' +i);
    }
  }
}
