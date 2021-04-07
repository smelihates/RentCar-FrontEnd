import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiUrl } from '../models/apiUrl';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<RentalDetail>> {
    let newUrl = ApiUrl + 'rentals/getrentaldetails';
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newUrl);
  }

  getRentalsByCarId(carId: number): Observable<ListResponseModel<Rental>> {
    let newUrl = ApiUrl + 'rentals/getrentalsbycarid?carid=' + carId;

    return this.httpClient.get<ListResponseModel<Rental>>(newUrl);
  }
}
