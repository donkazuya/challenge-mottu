import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}

  private API_URL = 'https://rickandmortyapi.com/api'
  
  getAllCharacters() {
    return this.http.get(`${this.API_URL}/character`)
  }
}