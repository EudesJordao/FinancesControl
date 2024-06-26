import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Finance } from './finance';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  public financeHistoric: Finance[] = [];
  public balance: number = 0;

  private apiUrl = 'http://localhost:8080/api/finances';
  private balanceUrl = 'http://localhost:8080/api/balances'


  constructor(private http: HttpClient) { }

  getBalance(): Observable<number>{
    return this.http.get<number>(this.balanceUrl).pipe(
      map(response =>{
        if(typeof response === 'number'){
          return response;
        } else{
          throw new Error ('invalid balance response')
        }
      })
    );
  }

  getFinances(): Observable<Finance[]> {
    return this.http.get<Finance[]>(this.apiUrl);
  }

  saveFinance(finance: Finance): Observable<Finance> {
    return this.http.post<Finance>(this.apiUrl, finance);
  }

  addTransaction(finance: Finance): void{
    this.saveFinance(finance).subscribe(() => {
      this.getBalance().subscribe(balance =>{
        this.balance = balance;
      })
    })
  }

  addDeposit(finance: Finance): void {
    this.saveFinance(finance).subscribe(() =>{
      this.getBalance().subscribe(balance =>{
        this.balance =  balance;
      })
    })
  }

}
