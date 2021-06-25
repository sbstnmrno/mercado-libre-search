import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './pages/items/items.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    DetailComponent,
    HeaderComponent,
    SearchPageComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
