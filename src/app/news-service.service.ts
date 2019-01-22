import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_KEY = environment.apiKey;
const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  currentArticle: any;
  constructor(private http: HttpClient) { }
  getData(url) {
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
}
