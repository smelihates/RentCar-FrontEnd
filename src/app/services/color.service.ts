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
  colorFormData: Color = new Color();
  colors: Color[];

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Color>> {
    let newUrl = ApiUrl + 'colors/getall';
    return this.httpClient.get<ListResponseModel<Color>>(newUrl);
  }

  addColor() {
    let newUrl = ApiUrl + 'colors/add';
    return this.httpClient.post(newUrl, this.colorFormData);
  }

  updateColor() {
    let newUrl = ApiUrl + 'colors/update';
    return this.httpClient.put(newUrl, this.colorFormData);
  }

  refreshColorList() {
    let newUrl = ApiUrl + 'colors/getall';
    this.httpClient
      .get<ListResponseModel<Color>>(newUrl)
      .subscribe((response) => {
        this.colors = response.data;
        this.colors.sort((a, b) => (a.colorName > b.colorName ? 1 : -1));
      });
  }
}
