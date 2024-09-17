import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent4p3Component } from './subcontent4p3.component';

describe('Subcontent4p3Component', () => {
  let component: Subcontent4p3Component;
  let fixture: ComponentFixture<Subcontent4p3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent4p3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent4p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
