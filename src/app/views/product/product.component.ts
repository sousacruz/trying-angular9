import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.headerData = {
      title: 'Product',
      icon: 'storefront',
      routeUrl: '/product'
    }
  }

  navigateToCreate(): void {
    this.router.navigate(['/product/create']);
  }
}
