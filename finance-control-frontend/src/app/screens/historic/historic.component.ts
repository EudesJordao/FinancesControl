import { Component } from '@angular/core';
import { FinanceService } from 'src/app/finance.service';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent {



  constructor(public financeService: FinanceService){}

  ngOnInit(): void{
    this.loadHistoric();
  }

  loadHistoric(): void{
    this.financeService.getFinances().subscribe(data =>{
      this.financeService.financeHistoric = data;
    }, error =>{
      console.log('Error in saved', error);
    });
  }



}
