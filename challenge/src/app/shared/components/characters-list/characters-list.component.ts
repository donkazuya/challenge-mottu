import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character, infoPaginator } from '../../../models/interfaces/CharactersInterface';


@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss'
})


export class CharactersListComponent {
  @Input() charactersList : Array<Character> = []
  @Input() infoPaginator : infoPaginator = {
    count: 0,
    next: null,
    pages: 0,
    prev: null,
  }
  @Output() pageSelector = new EventEmitter<number>();

  selectedPaginator: number = 0;

  handleSelectedPaginator(event: any) {
    this.pageSelector.emit(event.page)
  }
  
}
