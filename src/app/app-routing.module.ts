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
import {CustomeridComponent} from "./component/customer/customerid/customerid.component";
import {NewCustomerComponent} from "./component/customer/new-customer/new-customer.component";
import {NewTransporterComponent} from "./component/transporter/new-transporter/new-transporter.component";
import {TransporteridComponent} from "./component/transporter/transporterid/transporterid.component";
import {NewWarehouseComponent} from "./component/warehouse/new-warehouse/new-warehouse.component";
import {WarehouseidComponent} from "./component/warehouse/warehouseid/warehouseid.component";
import {NewQuotationsComponent} from "./component/quotations/new-quotations/new-quotations.component";
import {QuotationsIdComponent} from "./component/quotations/quotations-id/quotations-id.component";

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

  // Customer route
  {path:'customer', component:CustomerComponent, canActivate:[AuthguardGuard] },
  {path:'customer/newCustomer', component:NewCustomerComponent, canActivate:[AuthguardGuard] },
  {path:'customer/:id_customer', component:CustomeridComponent, canActivate:[AuthguardGuard] },

  // Transporter route
  {path:'transporter', component:TransporterComponent, canActivate:[AuthguardGuard] },
  {path:'transporter/newTransporter', component:NewTransporterComponent, canActivate:[AuthguardGuard] },
  {path:'transporter/:id_transporter', component:TransporteridComponent, canActivate:[AuthguardGuard] },

  // Warehouse route
  {path:'warehouse', component:WarehouseComponent, canActivate:[AuthguardGuard]},
  {path:'warehouse/newWarehouse', component:NewWarehouseComponent, canActivate:[AuthguardGuard]},
  {path:'warehouse/:id_warehouse', component:WarehouseidComponent, canActivate:[AuthguardGuard]},

  // Quotations route
  {path:'quotations', component:QuotationsComponent, canActivate:[AuthguardGuard] },
  {path:'quotations/newQuotations', component:NewQuotationsComponent, canActivate:[AuthguardGuard] },
  {path:'quotations/:id_quotations', component:QuotationsIdComponent, canActivate:[AuthguardGuard] },

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
