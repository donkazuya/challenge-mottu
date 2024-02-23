import { Component, Input } from '@angular/core';
import { Character } from '../../../models/interfaces/CharactersInterface';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.scss'
})
export class CardCharacterComponent {
  @Input() name: any = ''
  @Input() image: string | undefined = ''
  @Input() species: string | undefined = ''
  @Input() type: string | undefined = ''
  @Input() character: Character = {}
}
