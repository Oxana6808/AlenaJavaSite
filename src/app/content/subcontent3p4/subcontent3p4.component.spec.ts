import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent3p4Component } from './subcontent3p4.component';

describe('Subcontent3p4Component', () => {
  let component: Subcontent3p4Component;
  let fixture: ComponentFixture<Subcontent3p4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent3p4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent3p4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
