import { Component } from '@angular/core';
import { Finance } from 'src/app/finance';
import { FinanceService } from 'src/app/finance.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {

  transaction: Finance = {activity: 'Deposit', amount: 0, data: '', type:'deposit'};


  constructor(public financeService: FinanceService){}

  saveDeposit(): void {

    this.financeService.addDeposit(this.transaction);
    this.transaction = {activity: 'Deposit', amount: 0, data: '', type:'deposit'};
  }

}
