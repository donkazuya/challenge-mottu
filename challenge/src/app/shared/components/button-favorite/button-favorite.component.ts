import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button-favorite',
  templateUrl: './button-favorite.component.html',
  styleUrl: './button-favorite.component.scss',
  standalone: true,
  imports: [MatIconModule]
})
export class ButtonFavoriteComponent {

  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected)
  }

}
