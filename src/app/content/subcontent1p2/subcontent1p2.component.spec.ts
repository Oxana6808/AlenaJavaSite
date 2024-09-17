import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent1p2Component } from './subcontent1p2.component';

describe('Subcontent1p2Component', () => {
  let component: Subcontent1p2Component;
  let fixture: ComponentFixture<Subcontent1p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent1p2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent1p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
