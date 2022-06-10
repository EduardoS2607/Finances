import { ListExpense } from 'src/app/model/list-expense';
import { ListExpensesService } from './../list-expenses/services/list-expenses.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogComponent implements OnInit {
  listagem!: ListExpense;
  formTransaction!: FormGroup;
  actionBtn: string = 'Adicionar Transação';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editElement: any,
    private listExpensesService: ListExpensesService,
  ) {}

  ngOnInit(): void {
    this.formTransaction = this.fb.group({
      id: [''],
      descriptionFinan: ['', [Validators.required]],
      categoryFinan: ['', [Validators.required]],
      accountFinan: ['', [Validators.required]],
      valueFinan: ['', [Validators.required]],
      dateTransaction: ['', [Validators.required]],
    });

    if (this.editElement) {
      this.actionBtn = 'Editar Transação';
      this.formTransaction.controls['descriptionFinan'].setValue(
        this.editElement.descriptionFinan
      );
      this.formTransaction.controls['categoryFinan'].setValue(
        this.editElement.categoryFinan
      );
      this.formTransaction.controls['accountFinan'].setValue(
        this.editElement.accountFinan
      );
      this.formTransaction.controls['valueFinan'].setValue(this.editElement.valueFinan);
      this.formTransaction.controls['dateTransaction'].setValue(
        this.editElement.dateTransaction
      );
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(){
    if (!this.editElement) {
      this.listExpensesService.post(this.formTransaction.value).subscribe()
      this.formTransaction.reset();
      this.onNoClick();
    }else{
      this.update();
    }
  }
  
  update() {
    this.listExpensesService.put(this.formTransaction.value,this.editElement.idFinan).subscribe()
    this.formTransaction.reset();
    this.onNoClick();
  }
}
