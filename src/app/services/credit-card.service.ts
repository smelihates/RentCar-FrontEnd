import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/apiUrl';
import { CreditCard } from '../models/creditCard';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  constructor(private httpClient: HttpClient) {}

  getById(id: number): Observable<SingleResponseModel<CreditCard>> {
    let newUrl = ApiUrl + 'creditcards/getbyid?id=' + id;

    return this.httpClient.get<SingleResponseModel<CreditCard>>(newUrl);
  }

  add(creditCard: CreditCard): Observable<ResponseModel> {
    console.log('servis çalıştı');
    console.log(creditCard);
    let newUrl = ApiUrl + 'creditcards/add';
    return this.httpClient.post<ResponseModel>(newUrl, creditCard);
  }
}
