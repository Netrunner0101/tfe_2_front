import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DeliveryService} from "../../../service/delivery.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-delivery',
  templateUrl: './new-delivery.component.html',
  styleUrls: ['./new-delivery.component.css']
})
export class NewDeliveryComponent implements OnInit {

  constructor(
    private delService:DeliveryService,
    private router:Router,
    private actiRoute:ActivatedRoute
  ) { }

  // Initial formgroup
  newDeliveryForm= new FormGroup({
    number_package : new FormControl(''),
    weight: new FormControl(''),
    dimension: new FormControl(''),
    departure_adress:new FormControl(''),
    departure_city : new FormControl(''),
    departure_postal_code : new FormControl(''),
    destination_adress : new FormControl(''),
    destination_city : new FormControl(''),
    destination_postal_code : new FormControl(''),
    outbout_date: new FormControl(''),
    arrival_date: new FormControl(''),
    remarks:new FormControl(''),
  });

  ngOnInit(): void {
  }

  createDelivery(){
    const newDelivery = {
      number_package : this.newDeliveryForm.value.number_package,
      weight:  this.newDeliveryForm.value.weight ,
      dimension:  this.newDeliveryForm.value.dimension ,
      departure_adress: this.newDeliveryForm.value.departure_adress ,
      departure_city :  this.newDeliveryForm.value.departure_city ,
      departure_postal_code : this.newDeliveryForm.value.departure_postal_code  ,
      destination_adress : this.newDeliveryForm.value.destination_adress  ,
      destination_city :  this.newDeliveryForm.value.destination_city ,
      destination_postal_code :  this.newDeliveryForm.value.destination_postal_code ,
      outbout_date:  this.newDeliveryForm.value.outbout_date ,
      arrival_date: this.newDeliveryForm.value.arrival_date  ,
      remarks: this.newDeliveryForm.value.remarks ,
    }
    this.delService.create(newDelivery)
    this.router.navigate(['/delivery']).then(() => {
      window.location.reload();
    });
  }

}
