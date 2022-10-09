import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HW02AdvJSComponent } from './hw02-adv-js.component';

describe('HW02AdvJSComponent', () => {
  let component: HW02AdvJSComponent;
  let fixture: ComponentFixture<HW02AdvJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HW02AdvJSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HW02AdvJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
