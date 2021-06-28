import { Inject, Injectable } from '@angular/core';
import { UrlModel } from '../../models/url.model';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private SERVER_URL: string;

  public URLS: UrlModel = {
    getSearch: (): string => `${this.SERVER_URL}api/items`,
    getItem: (id): string => `${this.SERVER_URL}api/items/${id}`
  }

  constructor(
    @Inject('SERVER_URL') serverUrl: string
  ) { 
    this.SERVER_URL = serverUrl;
  }
}
