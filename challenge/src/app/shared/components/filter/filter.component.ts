import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  standalone: true,
  imports: [FormsModule, MatInputModule, ReactiveFormsModule]
})
export class FilterComponent {

  filter = new FormControl ('');
  @Output() emitSearchCharacters = new EventEmitter

  constructor(private service:ServiceService) {}

  searchCharacter() {
    const searchCharacter = this.filter.value as string;
    if(searchCharacter.length > 3) {
      this.service.searchCharacter(searchCharacter)
        .subscribe({
          next: (response) => {
            this.emitSearchCharacters.emit(response)
          },
          error: (err) => {
            this.emitSearchCharacters.emit([])
          }
        })
    }

    if(searchCharacter === '') {
      this.emitSearchCharacters.emit('')
    }
  }

}
