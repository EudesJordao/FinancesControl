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
    if (!this.transaction.activity ||
        this.transaction.activity.trim() === "" ||
        this.transaction.amount === 0 ||
        this.transaction.amount < 0 ||
        this.transaction.data === "" ||
        !this.transaction.amount
      ) {
      alert("Fill in all fields correct");
      return;
    }

    this.financeService.addTransaction(this.transaction);
    this.transaction = {activity: '', amount: 0, data: '', type:'activity'};
  }
}


