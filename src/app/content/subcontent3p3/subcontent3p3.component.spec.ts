import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent3p3Component } from './subcontent3p3.component';

describe('Subcontent3p3Component', () => {
  let component: Subcontent3p3Component;
  let fixture: ComponentFixture<Subcontent3p3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent3p3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent3p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
