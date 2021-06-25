import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  public result: any;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {
    this.result = {};
  }

  ngOnInit(): void {
    this.getSearchResults();
  }

  private async getSearchResults(): Promise<void> {
    this.route.queryParams.subscribe(params => {
      this.productService.getResults(params['search']).subscribe(res => this.result = res);
    });
  }
}
