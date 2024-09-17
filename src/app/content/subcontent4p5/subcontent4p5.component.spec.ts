import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent4p5Component } from './subcontent4p5.component';

describe('Subcontent4p5Component', () => {
  let component: Subcontent4p5Component;
  let fixture: ComponentFixture<Subcontent4p5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent4p5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent4p5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
