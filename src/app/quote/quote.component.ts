import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'BARACK OBAMA', '"Yes We Can"',0,0,new Date(2019,9,14)),
    new Quote(2,'KIPCHOGE KEINO','"No Human Is Limited"',0,0,new Date(2019,6,9)),
    new Quote(3,'FELIX KIBET','"Quitters Are Never Winners"',0,0,new Date(2019,1,12)),
    new Quote(4,'NELSON MANDELA','"Its Not Over Untill Its Over"',0,0,new Date(2019,11,18)),
    
  ];
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  (isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  

  up(i:number){
    var quote = this.quotes[i];
    quote.upvote +=1;
  }
  down(i:number){
    var quote = this.quotes[i];
    quote.downvote +=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
