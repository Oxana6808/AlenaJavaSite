import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent3p8Component } from './subcontent3p8.component';

describe('Subcontent3p8Component', () => {
  let component: Subcontent3p8Component;
  let fixture: ComponentFixture<Subcontent3p8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent3p8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent3p8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
