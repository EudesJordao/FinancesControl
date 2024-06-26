import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricComponent } from './screens/historic/historic.component';
import { FinancesComponent } from './screens/finances/finances.component';
import { BalanceComponent } from './screens/balance/balance.component';
import { DepositComponent } from './screens/deposit/deposit.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component: BalanceComponent},
  {path:'deposit', component: DepositComponent},
  {path:'finances', component: FinancesComponent},
  {path:'historic', component: HistoricComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
