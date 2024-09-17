import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent2p6Component } from './subcontent2p6.component';

describe('Subcontent2p6Component', () => {
  let component: Subcontent2p6Component;
  let fixture: ComponentFixture<Subcontent2p6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent2p6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent2p6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
