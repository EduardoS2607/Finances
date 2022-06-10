import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { ExpensesByCategoryComponent } from './dashboard/components/expenses-by-category/expenses-by-category.component';
import { IncomeByCategoryComponent } from './dashboard/components/income-by-category/income-by-category.component';
import { CommonModule } from '@angular/common';
import { ListExpensesComponent } from './list-expenses/list-expenses/list-expenses.component';
import { ResumeTransactionsComponent } from './resume-transactions/resume-transactions.component';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ExpensesReportsComponent } from './reports/components/expenses-reports/expenses-reports.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalConfirmComponent,
    ExpensesByCategoryComponent,
    IncomeByCategoryComponent,
    ListExpensesComponent,
    ResumeTransactionsComponent,
    FormDialogComponent,
    HeaderComponent,
    FooterComponent,
    ExpensesReportsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    AppMaterialModule,
    CommonModule,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
