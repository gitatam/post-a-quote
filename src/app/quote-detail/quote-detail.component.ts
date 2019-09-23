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

  upvote = 0;
  downvote = 0;
  increasedUpvote: number;
  decreasedDownvote: number;
  upvoteQuote() {
    this.increasedUpvote = this.upvote++;
  }

  downvoteQuote() {
    this.decreasedDownvote = this.downvote++;
  }

  deleteQuote() {
    console.log('You clicked me');
  }

  constructor() { }

  ngOnInit() {
  }

}
