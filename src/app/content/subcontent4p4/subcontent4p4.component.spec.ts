import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent4p4Component } from './subcontent4p4.component';

describe('Subcontent4p4Component', () => {
  let component: Subcontent4p4Component;
  let fixture: ComponentFixture<Subcontent4p4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent4p4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent4p4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
