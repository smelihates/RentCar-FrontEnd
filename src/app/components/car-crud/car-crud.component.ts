import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { Brand } from 'src/app/models/brand';
import { CarD } from 'src/app/models/carD';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-crud',
  templateUrl: './car-crud.component.html',
  styleUrls: ['./car-crud.component.css'],
})
export class CarCrudComponent implements OnInit {
  carForm: FormGroup;
  currentCarId: number;
  car1: CarD = new CarD();
  brands: Brand[] = [];
  currentBrand: Brand;
  currentBrandId: number;
  currentColorId: number;
  colors: Color[] = [];
  currentColor: Color;

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.loadParameter();

    this.createCarForm();

    this.activatedRoute.params.subscribe((params) => {
      this.currentCarId = params['carId'];
      if (this.currentCarId != undefined) {
        this.getCarByCarId(this.currentCarId);
      }
    });
  }

  loadParameter() {
    this.brandService.getAll().subscribe((response) => {
      this.brands = response.data;
    });
    this.colorService.getAll().subscribe((response) => {
      this.colors = response.data;
    });
  }

  createCarForm() {
    this.carForm = this.formBuilder.group({
      id: [undefined, Validators.required],
      brandId: ['', Validators.required],
      model: ['', Validators.required],
      modelYear: ['', Validators.required],
      colorId: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  getCarByCarId(carId: number) {
    this.carService
      .getByCarId(carId)
      .pipe(first())
      .subscribe((response) => {
        this.carForm.patchValue(response.data);
        this.currentColorId = response.data.colorId;
        this.currentBrandId = response.data.brandId;
        console.log('brand');
        console.log(this.currentBrandId);
        // console.log(this.carForm);
      });
  }

  onSubmit() {
    if (
      this.carForm.get('id').value == undefined ||
      this.carForm.get('id').value == null
    ) {
      this.add();
      console.log('yeni');
    } else if (this.carForm.get('id').value > 0) {
      this.update();
      console.log('update');
    }
  }

  onReset() {
    this.carForm.reset();
    console.log('reset');
  }
  add() {
    console.log(this.carForm.valid);
    if (this.carForm.valid) {
      let carModel = Object.assign({}, this.carForm.value);
      this.carService.addCar(carModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
        },
        (responseError) => {
          console.log('responseError');
          console.log(responseError.error.errors);
          if (responseError.error.errors.length > 0) {
            for (let i = 0; i < responseError.error.errors.length; i++) {
              this.toastrService.error(
                responseError.error.errors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }

  update() {
    console.log(this.carForm.valid);
    if (this.carForm.valid) {
      let carModel = Object.assign({}, this.carForm.value);
      this.carService.updateCar(carModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
        },
        (responseError) => {
          console.log('responseError');
          console.log(responseError.error.errors);
          if (responseError.error.errors.length > 0) {
            for (let i = 0; i < responseError.error.errors.length; i++) {
              this.toastrService.error(
                responseError.error.errors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }

  getDeneme1() {
    console.log(this.currentBrandId);
    // if (this.currentBrandId) {
    //   this.carForm.setValue({ brandId: this.currentBrandId });
    // }
    console.log(this.currentColorId);
    // if (this.currentColorId) {
    //   this.carForm.setValue({ colorId: this.currentColorId });
    // }
    console.log('id : ' + this.carForm.get('id').value);
    console.log(this.carForm.value);
  }
}
