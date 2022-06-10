import { ListExpensesService } from './../services/list-expenses.service';
import { Component, OnInit,  ViewChild } from '@angular/core';
import { ListExpense } from 'src/app/model/list-expense';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { FormDialogComponent } from 'src/app/form-dialog/form-dialog.component';
import { ModalConfirmComponent } from 'src/app/modal-confirm/modal-confirm.component';
import { NotificationService } from 'src/app/services/notification.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.scss'],
})

export class ListExpensesComponent implements OnInit{
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatTable)

  table!: MatTable<any>;

  displayedColumns = [
    'descriptionFinan',
    'categoryFinan',
    'accountFinan',
    'valueFinan',
    'dateTransaction',
    'actions',
  ];
  dataSource: MatTableDataSource<ListExpense> = new MatTableDataSource()

  public expenses?: ListExpense[];
  constructor(
    private listExpensesService: ListExpensesService,
    private notificationService: NotificationService,
    public dialog: MatDialog
  ) {}


  ngOnInit(): void {
    this.updateTable();
  }


  delete(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '60%';

    this.dialog
      .open(ModalConfirmComponent, dialogConfig)
      .afterClosed()
      .subscribe((result) => {
        if (!result) return;

        this.notificationService.notification('Nota excluída com sucesso');
        this.listExpensesService.deleteTransaction(id).subscribe();
        this.updateTable();
      });
  }

  getTotalCost() {
    return this.listExpensesService.getTotalCost();
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(element: ListExpense | null): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '400px',
    });


    dialogRef.afterClosed().subscribe((result) => {
      if(result !== undefined){
      }
      this.notificationService.notification('Nota Adicionada com sucesso');
      this.updatePaginator();
      this.updateTable();
    });
  }

  editElement(element:ListExpense):void{
    const dialogEdit = this.dialog.open(FormDialogComponent,{
        width:'400px',
        data: element
    });

    dialogEdit.afterClosed().subscribe((result) => {
      this.notificationService.notification('Nota editada com sucesso');
      this.updatePaginator();
      this.updateTable();
    });
  }

  updateTable():void{
    this.listExpensesService.getAllTransactions().subscribe(
      (transaction: ListExpense[])=>{
        this.dataSource.data = transaction;
        this.expenses = transaction;
      },
      (erro:any)=>{
        console.error(erro);
      }
    );
  }
  updatePaginator(){
    // this.dataSource.paginator = this.paginator;
  }
}
