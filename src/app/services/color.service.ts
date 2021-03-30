import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ApiUrl } from '../models/apiUrl';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Color>> {
    let newUrl = ApiUrl + 'colors/getall';
    return this.httpClient.get<ListResponseModel<Color>>(newUrl);
  }
}
