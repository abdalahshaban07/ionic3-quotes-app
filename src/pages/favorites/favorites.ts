import { SettingsService } from './../../services/settings.services';
import { QuotePage } from './../quote/quote';
import { QuotesService } from './../../services/quotes.sevices';
import { Quote } from './../../data/quote.interface';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular'
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[]

  constructor(
    private quoteServ: QuotesService,
    private modalCtrl: ModalController,
    private settingServ: SettingsService

  ) { }

  ionViewWillEnter() {
    this.quotes = this.quoteServ.getFavoritesQuotes()
  }

  OnViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote)
    modal.present()
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        // this.quoteServ.removeQuoteFromFavorite(quote);
        // this.quotes = this.quoteServ.getFavoritesQuotes()
        this.OnRemoveFromFavorite(quote)
      }
    })
  }

  OnRemoveFromFavorite(quote: Quote) {
    this.quoteServ.removeQuoteFromFavorite(quote);
    this.quotes = this.quoteServ.getFavoritesQuotes()
  }

  getBackground() {
    return this.settingServ.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground'
  }
  isAltBackground() {
    return this.settingServ.isAltBackground()
  }
}
