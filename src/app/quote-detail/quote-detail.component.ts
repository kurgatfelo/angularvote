import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  @Input()
  index! :number;
  @Output() quotes = new EventEmitter<number>();
  @Output() quotesdown = new EventEmitter<number>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }


  upvote(index:number){
    this.quotes.emit(index);
  }
  downvote(index:number){
    this.quotesdown.emit(index);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
