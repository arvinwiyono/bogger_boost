import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThroughputWidgetComponent } from './throughput-widget.component';

describe('ThroughputWidgetComponent', () => {
  let component: ThroughputWidgetComponent;
  let fixture: ComponentFixture<ThroughputWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThroughputWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThroughputWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
