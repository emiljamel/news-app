import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesServiceService {

  url = 'https://gnews.io/api/v4/top-headlines';
  apiKey = '3a6def40eb180c8e2d152827266622a6';

  constructor(public http: HttpClient) { }

  getArticles(topic: string) {
    return this.http.get(`${this.url}?topic=${topic}&country=us&lang=en&token=${this.apiKey}`).pipe(
      map((results: any) => {
        return results['articles'];
      })
    );
  }
}
