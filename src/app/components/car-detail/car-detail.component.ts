import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  cars: Car[] = [];
  carImages: CarImage[] = [];
  currentCarId: number;

  constructor(
    private carService: CarService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.currentCarId = params['carId'];
      this.getCarDetails();
    });
  }

  getCarDetails() {
    this.carService.getById(this.currentCarId).subscribe((response) => {
      this.cars = response.data;
      console.log(this.cars);
    });

    this.carImageService
      .getCarImagesByCarId(this.currentCarId)
      .subscribe((response) => {
        this.carImages = response.data;
      });
  }
}
