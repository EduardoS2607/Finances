import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTransactionsComponent } from './resume-transactions.component';

describe('ResumeTransactionsComponent', () => {
  let component: ResumeTransactionsComponent;
  let fixture: ComponentFixture<ResumeTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
