import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent4p7Component } from './subcontent4p7.component';

describe('Subcontent4p7Component', () => {
  let component: Subcontent4p7Component;
  let fixture: ComponentFixture<Subcontent4p7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent4p7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent4p7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
