import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleinboxComponent } from './circleinbox.component';

describe('CircleinboxComponent', () => {
  let component: CircleinboxComponent;
  let fixture: ComponentFixture<CircleinboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleinboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleinboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
