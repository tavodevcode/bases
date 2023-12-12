import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroes: string[] = ['Batman', 'Superman', 'Spiderman', 'Ironman', 'Thor', 'Hulk'];
  public deleteHero?: string;

  handleRemoveLastHero(): void {
    this.deleteHero = this.heroes.pop();

    console.log({ deleteHero: this.deleteHero })
  }
}
