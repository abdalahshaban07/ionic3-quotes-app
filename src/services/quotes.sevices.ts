import { Quote } from './../data/quote.interface';
export class QuotesService {

    private favoriteQuotes: Quote[] = []

    addQuoteToFavorite(quote: Quote) {
        this.favoriteQuotes.push(quote)
    }

    removeQuoteFromFavorite(quote: Quote) {
        const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id
        })
        this.favoriteQuotes.splice(position, 1)
    }

    getFavoritesQuotes() {
        return this.favoriteQuotes.slice()
    }

    isQuoteFavorited(quote: Quote) {
        return this.favoriteQuotes.find((quoteEl: Quote) => {
            return quoteEl.id == quote.id
        })
    }
}