import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent2p1Component } from './subcontent2p1.component';

describe('Subcontent2p1Component', () => {
  let component: Subcontent2p1Component;
  let fixture: ComponentFixture<Subcontent2p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent2p1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent2p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
