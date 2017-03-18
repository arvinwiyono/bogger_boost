import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelWidgetComponent } from './fuel-widget.component';

describe('FuelWidgetComponent', () => {
  let component: FuelWidgetComponent;
  let fixture: ComponentFixture<FuelWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
