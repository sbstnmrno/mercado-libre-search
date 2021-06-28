import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchResponseModel } from 'src/app/shared/models/search.model';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  public result: any;
  public data!: SearchResponseModel;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {
    this.getSearchResults();
  }

  ngOnInit(): void {
  }

  private async getSearchResults(): Promise<void> {
    this.route.queryParams.subscribe(params => {
      this.productService.getSearch(params['search']).subscribe(res => this.data = res);
    });
  }
}
