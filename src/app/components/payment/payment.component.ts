import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CreditCard } from 'src/app/models/creditCard';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  carPaymentFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private creditCardService: CreditCardService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCarPaymentForm();
  }

  createCarPaymentForm() {
    this.carPaymentFormGroup = this.formBuilder.group({
      userId: [3, Validators.required],
      fullName: ['alev yedi', Validators.required],
      creditCardNumber: ['1234564578941234', Validators.required],
      expirationMonth: [11, Validators.required],
      expirationYear: [22, Validators.required],
      ccv: [223, Validators.required],
    });
  }

  addCreditCard() {
    console.log('add çalıştı');
    if (!this.carPaymentFormGroup.valid) {
      console.log('add form valid çalıştı');
      let creditCardModel = Object.assign({}, this.carPaymentFormGroup.value);
      console.log(creditCardModel);
      this.creditCardService.add(creditCardModel).subscribe(
        (response) => {
          console.log('add success çalıştı');
          this.toastrService.success(response.message, 'Başarılı');
        },
        (responseError) => {
          console.log(responseError);
          // console.log('add error çalıştı');
          // if (responseError.error.Errors.length > 0) {
          //   for (let i = 0; i < responseError.error.Errors.length; i++) {
          //     this.toastrService.error(
          //       responseError.error.Errors[i].ErrorMessage,
          //       'Doğrulama hatası'
          //     );
          //   }
          // }
        }
      );
    }
  }
}
