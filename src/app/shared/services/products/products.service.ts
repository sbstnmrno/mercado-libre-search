import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UrlService } from '../url/url.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  
  constructor(
    private httpClient: HttpClient,
    private urlService: UrlService
  ) { }
  
  public getSearch(search: string): Observable<any> {
    return this.httpClient.get(this.urlService.URLS.getSearch(), {params: {
      'q': search,
      'limit': 4
    }});
  }

  public getItem(id: string): Observable<any> {
    return this.httpClient.get(this.urlService.URLS.getItem(id));
  }
}
