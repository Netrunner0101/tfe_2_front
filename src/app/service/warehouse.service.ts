import { Injectable } from '@angular/core';
import {url_dev} from "../global";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Transporter} from "../models/transporter";
import {Warehouse} from "../models/warehouse";

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private url = url_dev;

  constructor(private http:HttpClient) { }

  AllWarehouse():Observable<Warehouse>{
    return this.http.get<Warehouse>(this.url+'/api/Warehouse/warehouses');
  }

}
