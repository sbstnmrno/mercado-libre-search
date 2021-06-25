import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public detail: any;
  public description: any;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getDetail();
  }

  private getDetail(): void {
    const id = this.route.url.subscribe(res => {
        this.productsService.getProduct(res[1].path).subscribe(res => this.detail = res);
        this.productsService.getProductDescription(res[1].path).subscribe(res => this.description = res);
    }, err => {
      console.error(err);
    });
  }

}
