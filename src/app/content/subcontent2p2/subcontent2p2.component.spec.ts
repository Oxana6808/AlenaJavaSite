import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent2p2Component } from './subcontent2p2.component';

describe('Subcontent2p2Component', () => {
  let component: Subcontent2p2Component;
  let fixture: ComponentFixture<Subcontent2p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent2p2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent2p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
