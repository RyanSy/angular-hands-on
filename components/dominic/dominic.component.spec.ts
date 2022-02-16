import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DominicComponent } from './dominic.component';

describe('DominicComponent', () => {
  let component: DominicComponent;
  let fixture: ComponentFixture<DominicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DominicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DominicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
