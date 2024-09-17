import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent3p1Component } from './subcontent3p1.component';

describe('Subcontent3p1Component', () => {
  let component: Subcontent3p1Component;
  let fixture: ComponentFixture<Subcontent3p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent3p1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent3p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
