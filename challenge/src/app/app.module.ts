import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './shared/components/filter/filter.component';
import { EmptyPageComponent } from './shared/components/empty-page/empty-page.component';
import { CharactersListComponent } from './shared/components/characters-list/characters-list.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    FavoritesComponent,
    EmptyPageComponent,
    CharactersListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderComponent,
    FilterComponent
  ],
  providers: [
    provideAnimationsAsync(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
