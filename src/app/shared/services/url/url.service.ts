import { Inject, Injectable } from '@angular/core';
import { UrlModel } from '../../models/url.model';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private BASE_URL: string;

  public URLS: UrlModel = {
    getResultsByQuery: (): string => `${this.BASE_URL}sites/MCO/search`,
    getProductById: (id: string): string => `${this.BASE_URL}items/${id}`,
    getProductDescriptionById: (id: string): string => `${this.BASE_URL}items/${id}/description`
  }

  constructor(
    @Inject('BASE_URL') baseUrl: string
  ) { 
    this.BASE_URL = baseUrl;
  }
}
