import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent3p7Component } from './subcontent3p7.component';

describe('Subcontent3p7Component', () => {
  let component: Subcontent3p7Component;
  let fixture: ComponentFixture<Subcontent3p7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent3p7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent3p7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
