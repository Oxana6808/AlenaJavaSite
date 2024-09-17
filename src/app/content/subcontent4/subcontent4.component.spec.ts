import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subcontent4Component } from './subcontent4.component';

describe('Subcontent4Component', () => {
  let component: Subcontent4Component;
  let fixture: ComponentFixture<Subcontent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subcontent4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subcontent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
