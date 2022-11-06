import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Delivery} from "../models/delivery";
import {Customer} from "../models/customer";
import {HttpClient} from "@angular/common/http";
import {url_dev} from "../global";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = url_dev;

  constructor(private http:HttpClient) { }

  AllCustomer():Observable<Customer>{
    return this.http.get<Customer>(this.url+'/api/Customer/customers');
  }


}
