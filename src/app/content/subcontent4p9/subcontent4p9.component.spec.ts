import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent4p9Component } from './subcontent4p9.component';

describe('Subcontent4p9Component', () => {
  let component: Subcontent4p9Component;
  let fixture: ComponentFixture<Subcontent4p9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent4p9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent4p9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
