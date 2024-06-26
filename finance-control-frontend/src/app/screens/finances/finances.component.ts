import { Component } from '@angular/core';
import { Finance } from 'src/app/finance';
import { FinanceService } from 'src/app/finance.service';

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.css']
})
export class FinancesComponent {
  transaction: Finance = {activity: '', amount: 0, data: '', type:'activity'}


  constructor(public financeService: FinanceService){}


  saveInfos(): void {
    if (this.transaction.activity === "" || this.transaction.amount === 0) {
      alert("Fill in all fields");
      return;
    }

    if (this.financeService.balance < this.transaction.amount) {
      alert("Your account is negative!");
    }

    this.financeService.addTransaction(this.transaction);
    this.transaction = {activity: '', amount: 0, data: '', type:'activity'};
  }
}


