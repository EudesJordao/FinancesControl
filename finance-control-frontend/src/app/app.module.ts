import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './screens/nav/nav.component';
import { FinancesComponent } from './screens/finances/finances.component';
import { HistoricComponent } from './screens/historic/historic.component';
import { BalanceComponent } from './screens/balance/balance.component';
import { DepositComponent } from './screens/deposit/deposit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FinancesComponent,
    HistoricComponent,
    BalanceComponent,
    DepositComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
