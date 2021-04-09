import { SingleResponseModel } from './singleResponseModel';

export interface CreditCard {
  id: number;
  userId: number;
  fullName: string;
  creditCardNumber: string;
  expriationYear: number;
  expirationMonth: number;
}
