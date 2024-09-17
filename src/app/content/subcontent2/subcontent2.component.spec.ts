import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent2Component } from './subcontent2.component';

describe('Subcontent2Component', () => {
  let component: Subcontent2Component;
  let fixture: ComponentFixture<Subcontent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
