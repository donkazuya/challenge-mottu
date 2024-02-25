import { NgModule } from '@angular/core';
import { EmptyPageComponent } from './components/empty-page/empty-page.component';
import { CardCharacterComponent } from './components/card-character/card-character.component';
import { CommonModule } from '@angular/common';
import { ButtonFavoriteComponent } from './components/button-favorite/button-favorite.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ButtonFavoriteComponent,
    HeaderComponent,
    SearchComponent,
    PaginationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    EmptyPageComponent,
    HeaderComponent,
    SearchComponent,
    CharactersListComponent,
    FavoriteListComponent,
    CardCharacterComponent
  ],
  declarations: [
    EmptyPageComponent,
    CharactersListComponent,
    FavoriteListComponent,
    CardCharacterComponent
  ],
  providers: [],
})
export class SharedModule { }
