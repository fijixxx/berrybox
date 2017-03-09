import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { IndexWeaponComponent } from './index-weapon/index-weapon.component';
import { DetailWeaponComponent } from './detail-weapon/detail-weapon.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexWeaponComponent,
    DetailWeaponComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
