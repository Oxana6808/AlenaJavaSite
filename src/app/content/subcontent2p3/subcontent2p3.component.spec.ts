import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent2p3Component } from './subcontent2p3.component';

describe('Subcontent2p3Component', () => {
  let component: Subcontent2p3Component;
  let fixture: ComponentFixture<Subcontent2p3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent2p3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent2p3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
