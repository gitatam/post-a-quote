export class Quote {
  public submitter: string;
  constructor(public quote: string, public author: string, public votes: number, public tag: string) {
    this.submitter = 'anonymous';
  }
}
