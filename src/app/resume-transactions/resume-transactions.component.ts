import { Component, OnInit } from '@angular/core';
import { ListExpensesService } from '../list-expenses/services/list-expenses.service';

@Component({
  selector: 'app-resume-transactions',
  templateUrl: './resume-transactions.component.html',
  styleUrls: ['./resume-transactions.component.scss']
})
export class ResumeTransactionsComponent implements OnInit {

  constructor(
    private listExpensesService: ListExpensesService,

  ) { }


  ngOnInit(): void {
  }
  getTotalCost(){
    return this.listExpensesService.getTotalCost();
  }

  getTotalIncome(){
    return this.listExpensesService.getTotalIncome()
  }

  getTotalExpenses(){
    return this.listExpensesService.getTotalExpenses()
  }


}
