import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountRoutingModule, AccountModule } from './account';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    AccountRoutingModule,
    AccountModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatSelectModule,
    MatTooltipModule,
    MatSidenavModule

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
