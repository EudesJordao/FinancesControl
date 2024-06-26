import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Finance } from 'src/app/finance';
import { FinanceService } from 'src/app/finance.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {

  ngOnInit(): void {
    this.loadBalance();
  }

  constructor(
    public service: FinanceService
  ){}

  loadBalance():void {
    this.service.getBalance().subscribe(
      data =>{
        this.service.balance = data;
      }, error => {
        console.log("error in balance", error);
      })
  }


  get balance(): number{
    return this.service.balance
  }

  get balanceStyle(){
    return{
      color: this.balance < 0 ? 'red' : 'white'
    }
  }


}
