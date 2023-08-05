import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGuageComponent } from './display-guage.component';

describe('DisplayGuageComponent', () => {
  let component: DisplayGuageComponent;
  let fixture: ComponentFixture<DisplayGuageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayGuageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayGuageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
