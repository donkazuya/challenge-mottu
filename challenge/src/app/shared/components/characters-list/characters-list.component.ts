import { Component, Input } from '@angular/core';
import { Character } from '../../../models/interfaces/getAllCharacters';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss'
})


export class CharactersListComponent {
  @Input() charactersList : Array<Character> = []

}
