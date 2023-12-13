import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Character } from '../../interfaces/character.interface'

@Component({
  selector: 'dbz-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent {
  @Input()
  public characterList: Character[] = []

  @Output()
  public onDeleteCharacterId: EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(id: string): void {
    this.onDeleteCharacterId.emit(id)
  }
}
