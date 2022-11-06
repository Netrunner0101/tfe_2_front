import { Injectable } from '@angular/core';
import {url_dev} from "../global";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/customer";
import {Transporter} from "../models/transporter";

@Injectable({
  providedIn: 'root'
})
export class TransporterService {

  private url = url_dev;

  constructor(private http:HttpClient) { }

  AllTransporter():Observable<Transporter>{
    return this.http.get<Transporter>(this.url+'/api/Transporter/transporters');
  }

}
