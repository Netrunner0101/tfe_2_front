import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './component/authentication/authentication.component';
import { CustomerComponent } from './component/customer/customer.component';
import { DeliveryComponent } from './component/delivery/delivery.component';
import { QuotationsComponent } from './component/quotations/quotations.component';
import { TransporterComponent } from './component/transporter/transporter.component';
import { WarehouseComponent } from './component/warehouse/warehouse.component';
import {RouterLinkWithHref, RouterModule, RouterOutlet, Routes} from "@angular/router";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HTTP_INTERCEPTORS, HttpClientModule, HttpInterceptor} from "@angular/common/http";
import {TokenInterceptorInterceptor} from "./token-interceptor.interceptor";
import {AuthguardGuard} from "./component/authentication/authguard.guard";
import {MatTableModule} from "@angular/material/table";
import {DeliveryIdComponent} from "./component/delivery/delivery.id/delivery.id.component";
import {NewDeliveryComponent} from "./component/delivery/new-delivery/new-delivery.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {CustomeridComponent} from "./component/customer/customerid/customerid.component";
import {MatExpansionModule} from "@angular/material/expansion";
import { NewCustomerComponent } from './component/customer/new-customer/new-customer.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { TransporteridComponent } from './component/transporter/transporterid/transporterid.component';
import { NewTransporterComponent } from './component/transporter/new-transporter/new-transporter.component';
import { NewWarehouseComponent } from './component/warehouse/new-warehouse/new-warehouse.component';
import { WarehouseidComponent } from './component/warehouse/warehouseid/warehouseid.component';
import { NewQuotationsComponent } from './component/quotations/new-quotations/new-quotations.component';
import { QuotationsIdComponent } from './component/quotations/quotations-id/quotations-id.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    CustomerComponent,
    DeliveryComponent,
    QuotationsComponent,
    TransporterComponent,
    WarehouseComponent,
    DeliveryIdComponent,
    NewDeliveryComponent,
    CustomeridComponent,
    NewCustomerComponent,
    TransporteridComponent,
    NewTransporterComponent,
    NewWarehouseComponent,
    WarehouseidComponent,
    NewQuotationsComponent,
    QuotationsIdComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    HttpClientModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    RouterLinkWithHref,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatExpansionModule,
    MatGridListModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:TokenInterceptorInterceptor, multi:true},
    AuthguardGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
