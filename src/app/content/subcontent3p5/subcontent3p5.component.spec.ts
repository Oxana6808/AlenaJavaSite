import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent3p5Component } from './subcontent3p5.component';

describe('Subcontent3p5Component', () => {
  let component: Subcontent3p5Component;
  let fixture: ComponentFixture<Subcontent3p5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent3p5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent3p5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
