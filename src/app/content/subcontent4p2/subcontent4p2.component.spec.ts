import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent4p2Component } from './subcontent4p2.component';

describe('Subcontent4p2Component', () => {
  let component: Subcontent4p2Component;
  let fixture: ComponentFixture<Subcontent4p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent4p2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent4p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
