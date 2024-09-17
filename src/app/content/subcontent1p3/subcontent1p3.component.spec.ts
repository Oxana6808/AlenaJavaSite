import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent1p3Component } from './subcontent1p3.component';

describe('Subcontent1p3Component', () => {
  let component: Subcontent1p3Component;
  let fixture: ComponentFixture<Subcontent1p3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent1p3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent1p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
