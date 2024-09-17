import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent2p5Component } from './subcontent2p5.component';

describe('Subcontent2p5Component', () => {
  let component: Subcontent2p5Component;
  let fixture: ComponentFixture<Subcontent2p5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent2p5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent2p5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
