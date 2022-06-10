import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListExpense } from './../../model/list-expense';

@Injectable({
  providedIn: 'root'
})
export class ListExpensesService {

  baseUrl = `${environment.baseUrl}/Finances`;
  constructor(private http: HttpClient) { }


  getAllTransactions(): Observable<ListExpense[]>{
    return this.http.get<ListExpense[]>(`${this.baseUrl}`)
  }
 

  post(listExpense: ListExpense){
    return this.http.post(`${this.baseUrl}`,listExpense)
  }

  put(listExpense: ListExpense, id:number){
    return this.http.put(`${this.baseUrl}/${id}`,listExpense);
  }

  deleteTransaction(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  
  transactions: ListExpense[] = [
    {
      idFinan: 1,
      descriptionFinan: "Bolo",
      categoryFinan: "Alimentação",
      accountFinan: "Bradesco",
      valueFinan: -10,
      dateTransaction: new Date()
    },
    {
      idFinan: 2,
      descriptionFinan: "Notebook",
      categoryFinan: "Educação",
      accountFinan: "Carteira",
      valueFinan: -2700,
      dateTransaction:  new Date()
    },
    {
      idFinan: 3,
      descriptionFinan: "Uber",
      categoryFinan: "Transporte",
      accountFinan: "Itau",
      valueFinan: -28,
      dateTransaction:  new Date()
    },
    {
      idFinan: 4,
      descriptionFinan: "Salario",
      categoryFinan: "Salario",
      accountFinan: "Nubank",
      valueFinan: 3000,
      dateTransaction:  new Date()
    },
    {
      idFinan: 5,
      descriptionFinan: "Uber",
      categoryFinan: "Transporte",
      accountFinan: "Itau",
      valueFinan: -15,
      dateTransaction:  new Date()
    },
    {
      idFinan: 6,
      descriptionFinan: "Monitor",
      categoryFinan: "Eletonicos",
      accountFinan: "Carteira",
      valueFinan: -600,
      dateTransaction:  new Date()
    },
    {
      idFinan: 7,
      descriptionFinan: "Mercado",
      categoryFinan: "Alimentação",
      accountFinan: "Bradesco",
      valueFinan: -700,
      dateTransaction:  new Date()
    },
  ]

  nextId: number =8;
  getTransactions() {
    return this.transactions;
  }

  add(transaction: ListExpense): boolean {
    let cli: ListExpense = { idFinan: this.nextId++, ...transaction}
    this.transactions.push(cli);
    console.log(cli);

    return true;
  }

  update(transaction: ListExpense,id:number): boolean {
    this.transactions.find((p)=>{
      if(p.idFinan == id){
        p.descriptionFinan = transaction.descriptionFinan;
        p.categoryFinan = transaction.categoryFinan;
        p.accountFinan = transaction.accountFinan;
        p.valueFinan = transaction.valueFinan;
        p.dateTransaction = transaction.dateTransaction;
      }
    })
    return true;
  }

  delete(id: Number): boolean {
    const index = this.transactions.findIndex(x => x.idFinan === id);
    this.transactions.splice(index, 1);
    return true;
  }

  getTotalCost() {
    return this.transactions.map(t => t.valueFinan).reduce((acc, value) => acc + value, 0);
  }

  getTotalExpenses() {
    return this.transactions.filter(value => value.valueFinan < 0).reduce((acc, value) => acc + value.valueFinan, 0);
  }



  getTotalIncome() {
    return this.transactions.filter(v => v.valueFinan > 0).reduce((acc, value) => acc + value.valueFinan, 0).toFixed(2);
  }


}
