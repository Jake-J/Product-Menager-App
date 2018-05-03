import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsStoreService } from './services/products-store.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { DistributorsService } from './services/distributors.service';

import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    MessagesComponent,
    DashboardComponent,
    DistributorsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DialogModule,
    BrowserAnimationsModule,
    AccordionModule,
    ButtonModule,
    DropdownModule
  ],
  providers: [ProductsStoreService, MessageService, DistributorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
