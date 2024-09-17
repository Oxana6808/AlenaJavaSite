import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent3p2Component } from './subcontent3p2.component';

describe('Subcontent3p2Component', () => {
  let component: Subcontent3p2Component;
  let fixture: ComponentFixture<Subcontent3p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent3p2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent3p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
