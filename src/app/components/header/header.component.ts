import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public search: string;

  constructor(
    private router: Router
  ) {
    this.search = ''
  }

  public onSearch(): void {
    this.router.navigate(['/items'], { queryParams : {'search':this.search}});
  }

  ngOnInit(): void {
    
  }

}
