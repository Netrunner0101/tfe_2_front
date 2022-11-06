import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeliveryComponent} from "./component/delivery/delivery.component";
import {AuthenticationComponent} from "./component/authentication/authentication.component";
import {RouterModule, Routes} from "@angular/router";
import {AuthguardGuard} from "./component/authentication/authguard.guard";
import {CustomerComponent} from "./component/customer/customer.component";
import {TransporterComponent} from "./component/transporter/transporter.component";
import {WarehouseComponent} from "./component/warehouse/warehouse.component";
import {QuotationsComponent} from "./component/quotations/quotations.component";
import {DeliveryIdComponent} from "./component/delivery/delivery.id/delivery.id.component";
import {NewDeliveryComponent} from "./component/delivery/new-delivery/new-delivery.component";

/**
 *  If use Auth guard don't forget to add to the routing module
 * */
const routes: Routes = [

  // Route
  { path:'' , component: AuthenticationComponent},
  // Route Login
  { path:'login' , component: AuthenticationComponent},
  // Delivery route
  { path:'delivery' , component: DeliveryComponent, canActivate:[AuthguardGuard]},
  { path:'delivery/newDelivery' , component: NewDeliveryComponent, canActivate:[AuthguardGuard]},
  { path:'delivery/:id_delivery' , component: DeliveryIdComponent, canActivate:[AuthguardGuard]},
  //{ path:'delivery/id_delivery:id_delivery' , component: DeliveryIdComponent, canActivate:[AuthguardGuard]},


  // Customer route
  {path:'customer', component:CustomerComponent, canActivate:[AuthguardGuard] ,
    canActivateChild : [AuthguardGuard],
    children: [
      {  path: ':id', component:CustomerComponent  },
    ]},

  // Transporter route
  {path:'transporter', component:TransporterComponent, canActivate:[AuthguardGuard] ,
    canActivateChild : [AuthguardGuard],
    children: [
      {  path: ':id', component: TransporterComponent  },
    ]},

  // Warehouse route
  {path:'warehouse', component:WarehouseComponent, canActivate:[AuthguardGuard] ,
    canActivateChild : [AuthguardGuard],
    children: [
      {  path: ':id', component: WarehouseComponent  },
    ]},

  // Quotations route
  {path:'quotations', component:QuotationsComponent, canActivate:[AuthguardGuard] ,
    canActivateChild : [AuthguardGuard],
    children: [
      {  path: ':id', component: QuotationsComponent },
    ]},


  {path:'**', redirectTo:'login',pathMatch:'full'},
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule,
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
