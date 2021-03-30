import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/apiUrl';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Customer>> {
    let newUrl = ApiUrl + 'customers/getall';
    return this.httpClient.get<ListResponseModel<Customer>>(newUrl);
  }
}
