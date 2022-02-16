import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbyComponent } from './arby.component';

describe('ArbyComponent', () => {
  let component: ArbyComponent;
  let fixture: ComponentFixture<ArbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
