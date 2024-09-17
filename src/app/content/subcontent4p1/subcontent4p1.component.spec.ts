import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent4p1Component } from './subcontent4p1.component';

describe('Subcontent4p1Component', () => {
  let component: Subcontent4p1Component;
  let fixture: ComponentFixture<Subcontent4p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent4p1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent4p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
