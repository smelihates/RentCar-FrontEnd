import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ApiUrl } from '../models/apiUrl';
import { Car } from '../models/car';
import { CarD } from '../models/carD';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  carFormData: Car = new Car();
  cars: Car[];
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Car>> {
    let newUrl = ApiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<Car>>(newUrl);
  }

  getById(id: number): Observable<ListResponseModel<Car>> {
    let newUrl = ApiUrl + 'cars/getcardetailsbycarid?id=' + id;
    console.log(newUrl);
    return this.httpClient.get<ListResponseModel<Car>>(newUrl);
  }

  getCarsByBrandId(id: number): Observable<ListResponseModel<Car>> {
    let newUrl = ApiUrl + 'cars/getcarsdetailsbybrandid?id=' + id;
    return this.httpClient.get<ListResponseModel<Car>>(newUrl);
  }

  getCarsByColorId(id: number): Observable<ListResponseModel<Car>> {
    let newUrl = ApiUrl + 'cars/getcarsdetailsbycolorid?id=' + id;
    return this.httpClient.get<ListResponseModel<Car>>(newUrl);
  }

  getByCarId(id: number): Observable<SingleResponseModel<CarD>> {
    let newUrl = ApiUrl + 'cars/getbyid?id=' + id;
    console.log(newUrl);
    return this.httpClient.get<SingleResponseModel<CarD>>(newUrl);
  }

  addCar(car: CarD): Observable<ResponseModel> {
    console.log('new car :' + car);
    car.id = 0;
    let newUrl = ApiUrl + 'cars/add';
    return this.httpClient.post<ResponseModel>(newUrl, car);
  }

  updateCar(car: CarD): Observable<ResponseModel> {
    let newUrl = ApiUrl + 'cars/update';
    return this.httpClient.put<ResponseModel>(newUrl, car);
  }

  refreshCarList() {
    let newUrl = ApiUrl + 'cars/getall';
    this.httpClient
      .get<ListResponseModel<Car>>(newUrl)
      .subscribe((response) => {
        this.cars = response.data;
        this.cars.sort((a, b) => (a.brandName > b.brandName ? 1 : -1));
      });
  }
}
