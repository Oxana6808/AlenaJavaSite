import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent1p1Component } from './subcontent1p1.component';

describe('Subcontent1p1Component', () => {
  let component: Subcontent1p1Component;
  let fixture: ComponentFixture<Subcontent1p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent1p1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent1p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
