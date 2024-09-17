import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent2p4Component } from './subcontent2p4.component';

describe('Subcontent2p4Component', () => {
  let component: Subcontent2p4Component;
  let fixture: ComponentFixture<Subcontent2p4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent2p4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent2p4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
