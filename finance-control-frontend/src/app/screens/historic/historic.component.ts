import { Component, OnInit } from '@angular/core';
import { FinanceService } from 'src/app/finance.service';
import { Finance } from 'src/app/finance';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {
  paginatedFinances: Finance[] = [];
  filteredFinances: Finance[] = [];
  pageSize: number = 5;
  currentPage: number = 0;
  searchTerm: string = '';
  isAscending: boolean = true; 

  constructor(public financeService: FinanceService) { }

  ngOnInit(): void {
    this.loadHistoric();
  }

  loadHistoric(): void {
    this.financeService.getFinances().subscribe(data => {
      this.financeService.financeHistoric = data.sort((a,b) => b.id! - a.id!);
      this.filteredFinances = data;
      this.updatePagedHistoric();
    }, error => {
      console.log('Error in saved', error);
    });
  }

  updatePagedHistoric(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedFinances = this.filteredFinances.slice(startIndex, endIndex);
  }


  handlePageEvent(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePagedHistoric();
  }

  filterFinances(): void {
    this.filteredFinances = this.financeService.financeHistoric.filter(finance => {
      const activity = finance.activity ? finance.activity.toLowerCase() : '';
      const data = finance.data ? finance.data.toLowerCase() : '';
      const amount = finance.amount ? finance.amount.toString() : '';
      const searchTerm = this.searchTerm.toLowerCase();

      return activity.includes(searchTerm) ||
             data.includes(searchTerm) ||
             amount.includes(searchTerm);
    });
    this.currentPage = 0;
    this.updatePagedHistoric();
  }


}
