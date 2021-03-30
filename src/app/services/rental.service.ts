import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/apiUrl';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Rental>> {
    let newUrl = ApiUrl + 'rentals/getrentaldetails';
    return this.httpClient.get<ListResponseModel<Rental>>(newUrl);
  }
}
