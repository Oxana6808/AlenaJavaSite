import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent4p10Component } from './subcontent4p10.component';

describe('Subcontent4p10Component', () => {
  let component: Subcontent4p10Component;
  let fixture: ComponentFixture<Subcontent4p10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent4p10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent4p10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
