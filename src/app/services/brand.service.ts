import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ApiUrl } from '../models/apiUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Brand>> {
    let newUrl = ApiUrl + 'brands/getall';
    return this.httpClient.get<ListResponseModel<Brand>>(newUrl);
  }
}
