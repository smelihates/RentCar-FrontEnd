import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-option',
  templateUrl: './brand-option.component.html',
  styleUrls: ['./brand-option.component.css'],
})
export class BrandOptionComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand: Brand;

  constructor(private brandService: BrandService, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.brandService.getAll().subscribe((response) => {
      this.brands = response.data;
    });
  }

  setRouteBrand(brand: Brand) {
    if (brand == undefined) {
      this.router.navigateByUrl('car/list');
    } else {
      this.router.navigateByUrl('cars/brand/' + brand.brandId);
    }
  }
}
