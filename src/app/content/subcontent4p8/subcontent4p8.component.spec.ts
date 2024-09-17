import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent4p8Component } from './subcontent4p8.component';

describe('Subcontent4p8Component', () => {
  let component: Subcontent4p8Component;
  let fixture: ComponentFixture<Subcontent4p8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent4p8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent4p8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
