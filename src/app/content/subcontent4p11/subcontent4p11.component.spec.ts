import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent4p11Component } from './subcontent4p11.component';

describe('Subcontent4p11Component', () => {
  let component: Subcontent4p11Component;
  let fixture: ComponentFixture<Subcontent4p11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent4p11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent4p11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
