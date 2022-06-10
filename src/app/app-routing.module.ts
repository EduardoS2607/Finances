import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesByCategoryComponent } from './dashboard/components/expenses-by-category/expenses-by-category.component';
import { ExpensesReportsComponent } from './reports/components/expenses-reports/expenses-reports.component';
import { ListExpensesComponent } from './list-expenses/list-expenses/list-expenses.component';

const routes: Routes = [
  { path:'', pathMatch: 'full', component:ListExpensesComponent},
  { path:'dashboard', pathMatch: 'full', component:ExpensesByCategoryComponent},
  { path:'list-transactions', pathMatch: 'full', component:ListExpensesComponent},
  { path:'reports', pathMatch: 'full', component:ExpensesReportsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
