import { formatDate } from '@angular/common';
import { NodeWithI18n } from '@angular/compiler';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Rental } from 'src/app/models/rental';

import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  cars: Car[] = [];
  carImages: CarImage[] = [];
  currentCarId: number;
  rentDate?: Date;
  returnDate?: Date;
  rentals: Rental[];
  isCurrentCarRental: boolean;

  constructor(
    private carService: CarService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute,
    private rentalService: RentalService,
    private toastrService: ToastrService
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

  getRentMinDate() {
    let day = new Date();
    day.setDate(day.getDate());

    return day.toISOString().slice(0, 10);
  }

  getReturnMinDate() {
    let day = new Date();
    day.setDate(day.getDate() + 1);

    return day.toISOString().slice(0, 10);
  }

  isCarAvaliable() {}

  RentalControl() {
    this.toastrService.show(' rentDate : ' + this.rentDate);
    this.toastrService.show(' returnDate : ' + this.returnDate);

    if (this.rentDate > this.returnDate) {
      this.toastrService.error(
        'Kira başlangıç tarihi teslim tarihinden sonra olamaz !...',
        'Dikkat',
        {
          timeOut: 3000,
        }
      );
    } else if (this.rentDate === this.returnDate) {
      this.toastrService.error(
        'Kira başlangıç ve teslim tarihleri aynı gün olamaz !...',
        'Dikkat',
        {
          timeOut: 3000,
        }
      );
    } else {
      this.rentalService
        .getRentalsByCarId(this.currentCarId)
        .subscribe((response) => {
          //console.log(response.success);
          this.rentals = response.data;
          console.log(this.rentals);

          this.control2();
        });
    }
  }

  control2() {
    this.rentals.forEach((element) => {
      if (
        (this.rentDate > element.rentDate &&
          this.rentDate < element.returnDate) ||
        (this.returnDate > element.rentDate &&
          this.returnDate < element.returnDate) ||
        (this.rentDate < element.rentDate &&
          this.returnDate > element.returnDate)
      ) {
        this.isCurrentCarRental = false;
        this.toastrService.error(
          'Araç kiralanmak istenen tarihler için uygun değil !..',
          'Dikkat',
          {
            timeOut: 3000,
          }
        );
      } else {
        this.isCurrentCarRental = true;
      }
    });
    console.log('isCurrentCarRental : ' + this.isCurrentCarRental);
  }
}
