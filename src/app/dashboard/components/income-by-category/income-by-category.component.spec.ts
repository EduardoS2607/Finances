import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeByCategoryComponent } from './income-by-category.component';

describe('IncomeByCategoryComponent', () => {
  let component: IncomeByCategoryComponent;
  let fixture: ComponentFixture<IncomeByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
