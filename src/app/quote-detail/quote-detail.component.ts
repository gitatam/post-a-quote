import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input()  quote: Quote;
  @Output() isTerrible =  new EventEmitter<boolean>();

  upvoteQuote() {
    const upvotebtn = document.getElementById('upvote');
    console.log('You clicked me');
    // TODO: implement function handle upvotes
  }

  downvoteQuote() {
    const downvotebtn = document.getElementById('downvote');
    console.log('You clicked me');
    // TODO: implement function handle downvotes
  }

  deleteQuote(terrible: boolean) {
    this.isTerrible.emit(terrible);
  }

  constructor() { }

  ngOnInit() {
  }

}
