import { LibraryPage } from './../library/library';
import { FavoritesPage } from './../favorites/favorites';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  favoritesPage = FavoritesPage
  libraryPage = LibraryPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
