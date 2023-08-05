import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTemparatureComponent } from './display-temparature.component';

describe('DisplayTemparatureComponent', () => {
  let component: DisplayTemparatureComponent;
  let fixture: ComponentFixture<DisplayTemparatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTemparatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTemparatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
