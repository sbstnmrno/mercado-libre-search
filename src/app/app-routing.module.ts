import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { ItemsComponent } from './pages/items/items.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  { path:'', component: SearchPageComponent},
  { path: 'items', component: ItemsComponent},
  { path: 'items/:id', component: DetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
