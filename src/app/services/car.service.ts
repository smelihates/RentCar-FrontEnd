import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ApiUrl } from '../models/apiUrl';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Car>> {
    let newUrl = ApiUrl + 'cars/getcardetails';
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
}
