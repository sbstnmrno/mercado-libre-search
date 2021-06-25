import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export function getBaseUrl(): string {
  return environment.baseUrl
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
]

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
