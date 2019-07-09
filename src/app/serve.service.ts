import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  constructor(private http: HttpClient) { }
getArtist(name) {
return this.http.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist='+name+'&api_key=9761263dff0ddfe8d37f741c56b57db1&format=json');
}
}

