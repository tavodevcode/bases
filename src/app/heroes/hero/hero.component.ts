import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Batman';
  public age: number = 30;
  public heroes: string[] = ['Batman', 'Superman', 'Spiderman', 'Ironman', 'Thor', 'Hulk'];

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} is ${this.age} years old.`;
  }

  handleChangeHero(): void {
    this.name = this.heroes[Math.floor(Math.random() * this.heroes.length)];
  }

  handleChangeAge(): void {
    this.age++;
  }

  handleReset(): void {
    this.name = 'Batman';
    this.age = 30;
  }
}
