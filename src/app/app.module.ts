import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {EmitEventComponent} from './envoieEvent/envoie.event.component';
import {ReceiveEventComponent} from './recoitEvent/recoit.event.component';
import {AddEventService} from './globalEvent/global.event.service';

@NgModule({
  declarations: [
    AppComponent,
    EmitEventComponent,
    ReceiveEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AddEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
