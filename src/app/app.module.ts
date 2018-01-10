import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApparatenComponent } from './apparaten/apparaten.component';
import { ApparaatDetailComponent } from './apparaat-detail/apparaat-detail.component';
import { ApparaatService } from './apparaat.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ApparatenComponent,
    ApparaatDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ApparaatService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
