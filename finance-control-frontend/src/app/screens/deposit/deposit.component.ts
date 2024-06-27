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

    if (this.transaction.amount === 0 || 
        this.transaction.amount < 0 || 
        !this.transaction.activity || 
        this.transaction.activity.trim() === "" || 
        !this.transaction.amount
      )  {
      alert("Fill in all fields correct");
      return;
    }

    this.financeService.addDeposit(this.transaction);
    this.transaction = {activity: 'Deposit', amount: 0, data: '', type:'deposit'};
  }

}
