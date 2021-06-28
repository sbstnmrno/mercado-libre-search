import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemDetailModel } from 'src/app/shared/models/search.model';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public data: ItemDetailModel

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getDetail();
  }

  private getDetail(): void {
    this.route.url.subscribe(res => {
        this.productsService.getItem(res[1].path).subscribe(res => this.data = res);
    }, err => {
      console.error(err);
    });
  }

}
