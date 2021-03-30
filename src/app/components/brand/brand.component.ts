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

  constructor(private brandsService: BrandService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.brandsService.getAll().subscribe((response) => {
      this.brands = response.data;
    });
  }
}
