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

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    CustomerComponent,
    DeliveryComponent,
    QuotationsComponent,
    TransporterComponent,
    WarehouseComponent
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
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:TokenInterceptorInterceptor, multi:true},
    AuthguardGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
