import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ServiceService } from '../../shared/services/service.service';
import { Character } from '../../models/interfaces/getAllCharacters';

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

  characters: Array<Character> = []

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
        }
      })
  }

  handleSearchCharacters(event: string | any) {
    if(event === '') {
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
