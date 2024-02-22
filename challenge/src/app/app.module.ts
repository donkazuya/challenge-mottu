import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './shared/components/search/search.component';
import { EmptyPageComponent } from './shared/components/empty-page/empty-page.component';
import { CharactersListComponent } from './shared/components/characters-list/characters-list.component';
import { CardCharacterComponent } from './shared/components/card-character/card-character.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FavoriteListComponent } from './shared/components/favorite-list/favorite-list.component';
import { ButtonFavoriteComponent } from './shared/components/button-favorite/button-favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    FavoritesComponent,
    EmptyPageComponent,
    CharactersListComponent,
    CardCharacterComponent,
    FavoriteListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderComponent,
    SearchComponent,
    ButtonFavoriteComponent,
    StoreModule.forRoot({app: appReducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    provideAnimationsAsync(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
