import { QuotesService } from './../../services/quotes.sevices';
import { Quote } from './../../data/quote.interface';
import { NavParams, AlertController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quote: { category: string, quotes: Quote[], icon: string }
  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quoteServ: QuotesService
  ) { }

  // ionViewDidLoad() {
  //   this.quote = this.navParams.data
  // }

  ngOnInit() {
    this.quote = this.navParams.data
  }

  onAddToFavorites(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are You Sure ?',
      message: 'Are You Sure You Want To Add This Quote?',
      buttons: [
        {
          text: 'Yes ,Go Ahead',
          handler: () => {
            this.quoteServ.addQuoteToFavorite(selectedQuote)
          }
        },
        {
          text: 'No, I Changed My Mind',
          role: 'cancel',
          handler: () => {
            console.log('cancelled')
          }
        }
      ]
    })
    alert.present()
  }

  onRemoveFromFavorites(quote) {
    this.quoteServ.removeQuoteFromFavorite(quote)
  }

  isFavorite(quote: Quote) {
    return this.quoteServ.isQuoteFavorited(quote)
  }

}
