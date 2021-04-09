import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { ApiUrl } from '../models/apiUrl';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  brandFormData: Brand = new Brand();
  brands: Brand[];
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Brand>> {
    let newUrl = ApiUrl + 'brands/getall';
    return this.httpClient.get<ListResponseModel<Brand>>(newUrl);
  }

  addBrand() {
    let newUrl = ApiUrl + 'brands/add';
    return this.httpClient.post(newUrl, this.brandFormData);
  }

  updateBrand() {
    let newUrl = ApiUrl + 'brands/update';
    return this.httpClient.put(newUrl, this.brandFormData);
  }

  refreshBrandList() {
    let newUrl = ApiUrl + 'brands/getall';
    //console.log(newUrl);
    // this.httpClient.get(newUrl).subscribe((response: any) => { this.brands = response;
    //   console.log('markalar' + this.brands);
    // });
    this.httpClient
      .get<ListResponseModel<Brand>>(newUrl)
      .subscribe((response) => {
        this.brands = response.data;
        this.brands.sort((a, b) => (a.brandName > b.brandName ? 1 : -1));
      });
  }
}
