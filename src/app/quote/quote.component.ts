import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [];

  addNewQuote(quote) {
    this.quotes.push(quote);
  }

  constructor() { }

  ngOnInit() {
  }

  toggleAddQuote() {
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm.style.display === 'none') {
      document.getElementById('addQuote').innerText = 'Hide quote posting form.';
      quoteForm.style.display = 'block';
    } else {
      document.getElementById('addQuote').innerText = 'Proceed to posting a quote.';
      quoteForm.style.display = 'none';
    }
  }

}
