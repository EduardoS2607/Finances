import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ListExpensesService } from 'src/app/list-expenses/services/list-expenses.service';

@Component({
  selector: 'app-expenses-reports',
  templateUrl: './expenses-reports.component.html',
  styleUrls: ['./expenses-reports.component.scss']
})
export class ExpensesReportsComponent implements OnInit {

  myChart2?: any = [];
  label1:string = "Saúde";
  constructor(
    private listExpensesService: ListExpensesService,

  ) {}

  ngOnInit(): void {
    const transactions = this.listExpensesService.getTransactions();

    this.myChart2 = new Chart('myChart2', {
      type: 'pie',
      data: {
        datasets: [
          {
            data: [
              this.filterCategoryAlimentacao(transactions),
              this.filterCategoryEducacao(transactions),
              this.filterCategorySaude(transactions),
              this.filterCategoryTransporte(transactions),
            ],
            backgroundColor: [
              'rgba(102, 153, 0)',
              'rgba(255, 68, 68)',
              'rgba(153, 51, 204)',
              'rgba(255, 189, 33)',
              'rgba(165, 17, 159)',
              'rgba(0, 153, 204)',
            ],
            borderColor: [
              'rgba(102, 153, 0)',
              'rgba(255, 68, 68)',
              'rgba(153, 51, 204)',
              'rgba(255, 189, 33)',
              'rgba(75, 192, 192)',
              'rgba(0, 153, 204)',
            ],
          },
        ],
        labels: ['Alimentação', 'Educação', 'Saúde', 'Transporte'],
      },
    });
  }

  filterCategoryAlimentacao(t: any): void {
    return t
      .filter((o: any) => o.category === 'Alimentação')
      .reduce((acc: any, value: any) => acc + value.value, 0);
  }

  filterCategoryTransporte(t: any): void {
    return t
      .filter((o: any) => o.category === 'Transporte')
      .reduce((acc: any, value: any) => acc + value.value, 0);
  }

  filterCategoryEducacao(t: any): void {
    return t
      .filter((o: any) => o.category === 'Educação')
      .reduce((acc: any, value: any) => acc + value.value, 0);
  }

  filterCategorySaude(t: any): void {
    return t
      .filter((o: any) => o.category === 'Saúde')
      .reduce((acc: any, value: any) => acc + value.value, 0);
  }


}
