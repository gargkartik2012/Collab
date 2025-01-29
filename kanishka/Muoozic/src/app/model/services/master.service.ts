import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  get_all_artists() {
    return this.http.get("https://api.jamendo.com/v3.0/artists/?client_id=ee4fae57&format=jsonpretty");
  }
  
}
