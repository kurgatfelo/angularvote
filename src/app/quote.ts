export class Quote {
    public showDescription: boolean;
    constructor(public id: number,public description: string,public name: string, public upvote: number,public downvote: number,public completeDate: Date){
      this.showDescription=false;
    }
  }