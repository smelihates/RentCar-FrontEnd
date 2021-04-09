import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-crud',
  templateUrl: './brand-crud.component.html',
  styleUrls: ['./brand-crud.component.css'],
})
export class BrandCRUDComponent implements OnInit {
  addLayer: Boolean = false;

  constructor(
    public brandService: BrandService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log('brand ' + this.brandService.brandFormData.brandId);
    if (
      this.brandService.brandFormData.brandId == 0 ||
      this.brandService.brandFormData.brandId == undefined
    ) {
      this.addBrand(form);
      console.log('add');
    } else {
      this.updateBrand(form);
      console.log('update');
    }
  }

  addBrand(form: NgForm) {
    console.log(form);
    this.brandService.addBrand().subscribe(
      (response) => {
        this.resetForm(form);
        this.brandService.refreshBrandList();
        this.toastrService.success('Başarıyla Eklendi', 'Marka');
      },
      (responseError) => {
        console.log(responseError);
      }
    );
  }

  updateBrand(form: NgForm) {
    console.log(form);
    this.brandService.updateBrand().subscribe(
      (response) => {
        this.resetForm(form);
        this.brandService.refreshBrandList();
        this.toastrService.info('Başarıyla güncellendi', 'Marka');
      },
      (errorResponse) => {}
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.brandService.brandFormData = new Brand();
  }

  addLayerClass() {
    console.log(this.addLayer);
    this.addLayer == false ? (this.addLayer = true) : (this.addLayer = false);
    console.log(this.addLayer);
  }
}
