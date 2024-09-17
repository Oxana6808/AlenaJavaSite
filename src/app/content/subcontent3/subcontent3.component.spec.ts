import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent3Component } from './subcontent3.component';

describe('Subcontent3Component', () => {
  let component: Subcontent3Component;
  let fixture: ComponentFixture<Subcontent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
