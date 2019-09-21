export class Quote {
  public submitter: boolean;
  constructor(public quote: string, public author: string, public votes: number, public tag: string) {
    this.submitter = false;
  }
}
