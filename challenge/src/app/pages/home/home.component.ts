import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ServiceService } from '../../shared/services/service.service';
import { Character, GetAllCharacters } from '../../models/interfaces/CharactersInterface';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>()

  constructor(
    private service: ServiceService
  ) {}

  characters: Array<Character> | undefined = []

  ngOnInit():void {
    this.getAllCharacters();
  }

  getAllCharacters() {
    this.service.getAllCharacters()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (response) => {
          this.characters = response.results
        },
        error: (err) => {
          console.log(err);
          this.characters = []
        }
      })
  }

  handleSearchCharacters(event: GetAllCharacters | null) {
    if(event === null) {
      this.getAllCharacters()
    }

    if(event) {
      this.characters = event.results
    }

    
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
