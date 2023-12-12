import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})

export class CounterComponent implements OnInit {
    public count: number = 0;

    ngOnInit() { }

    public handleCountIncreased(): void {
      this.count++;
    }
  
    public handleCountDecreased(): void {
      if(this.count === 0) return;
  
      this.count--;
    }
  
    public handleCountReset(): void {
      this.count = 0;
    }
}