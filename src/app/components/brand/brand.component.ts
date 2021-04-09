import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];

  constructor(public brandService: BrandService) {}

  ngOnInit(): void {
    //this.getAll();
    this.brandService.refreshBrandList();
  }

  getAll() {
    console.log(this.brandService.brands);
    this.brandService.getAll().subscribe((response) => {
      this.brands = response.data;
    });
  }

  populateForm(selectBrand: Brand) {
    this.brandService.brandFormData = Object.assign({}, selectBrand);
  }
}
