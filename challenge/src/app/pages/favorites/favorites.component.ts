import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/app.state';
import { map } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent implements OnInit  {
  constructor(private store: Store<{ app: IAppState }>) {}

  favoriteList$ = this.store.select('app')
    .pipe(
      map(e => e.favoriteList)
    )
  
    favoriteList: Array<any> = []
  
      

  ngOnInit() {
    this.store.select('app')
      .pipe(
        map(e => e.favoriteList)
      )
      .subscribe({
        next: (res) => {
          this.favoriteList = res;
        }
      })
  }
}
