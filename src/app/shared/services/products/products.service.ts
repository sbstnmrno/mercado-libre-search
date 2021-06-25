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

  public getResults(search: string): Observable<any> {
    return this.httpClient.get(this.urlService.URLS.getResultsByQuery(), {params: {
      'q': search,
      'limit': 4
    }});
  }
  public getProduct(id: string): Observable<any> {
    return this.httpClient.get(this.urlService.URLS.getProductById(id));
  }
  public getProductDescription(id: string): Observable<any> {
    return this.httpClient.get(this.urlService.URLS.getProductDescriptionById(id));
  }
}
