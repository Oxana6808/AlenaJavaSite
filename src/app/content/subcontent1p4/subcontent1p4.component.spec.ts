import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent1p4Component } from './subcontent1p4.component';

describe('Subcontent1p4Component', () => {
  let component: Subcontent1p4Component;
  let fixture: ComponentFixture<Subcontent1p4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent1p4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent1p4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
