import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhadgaComponent } from './khadga.component';

describe('KhadgaComponent', () => {
  let component: KhadgaComponent;
  let fixture: ComponentFixture<KhadgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhadgaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhadgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
