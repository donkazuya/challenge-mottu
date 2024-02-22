import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.scss'
})
export class CardCharacterComponent {
  @Input() name: string = ''
  @Input() image: string = ''
  @Input() species: string = ''
  @Input() type: string = ''

  handleFavorite(state: boolean, data: object) {
    
  }
}
