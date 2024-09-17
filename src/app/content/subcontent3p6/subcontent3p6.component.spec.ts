import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent3p6Component } from './subcontent3p6.component';

describe('Subcontent3p6Component', () => {
  let component: Subcontent3p6Component;
  let fixture: ComponentFixture<Subcontent3p6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent3p6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent3p6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
