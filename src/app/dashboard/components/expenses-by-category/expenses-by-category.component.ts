import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ListExpensesService } from 'src/app/list-expenses/services/list-expenses.service';
Chart.register(...registerables);

@Component({
  selector: 'app-expenses-by-category',
  templateUrl: './expenses-by-category.component.html',
  styleUrls: ['./expenses-by-category.component.scss'],
})
export class ExpensesByCategoryComponent implements OnInit {
  myChart?: any = [];

  constructor(
    private listExpensesService: ListExpensesService,

  ) {}

  ngOnInit(): void {
    const transactions = this.listExpensesService.getTransactions();

    this.myChart = new Chart('myChart', {
      type: 'pie',
      data: {
        datasets: [
          {
            data: [
              this.filterCategory(transactions,"Alimentação"),
              this.filterCategory(transactions,"Educação"),
              this.filterCategory(transactions,"Saúde"),
              this.filterCategory(transactions,"Transporte"),
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



  filterCategory(t:any,category:string): void {
    return t.filter((o: any) => o.category === category)
      .reduce((acc: any, value: any) => acc + value.value, 0);
  }




}
