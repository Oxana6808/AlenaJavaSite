import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent1Component } from './subcontent1.component';

describe('Subcontent1Component', () => {
  let component: Subcontent1Component;
  let fixture: ComponentFixture<Subcontent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
