import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: any;

  constructor(private http: HttpClient) { }
  
  getPlayers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
