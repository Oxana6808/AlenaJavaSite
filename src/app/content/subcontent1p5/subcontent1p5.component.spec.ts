import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent1p5Component } from './subcontent1p5.component';

describe('Subcontent1p5Component', () => {
  let component: Subcontent1p5Component;
  let fixture: ComponentFixture<Subcontent1p5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent1p5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent1p5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
