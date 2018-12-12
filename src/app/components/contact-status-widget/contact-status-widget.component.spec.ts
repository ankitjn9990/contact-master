import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactStatusWidgetComponent } from './contact-status-widget.component';

describe('ContactStatusWidgetComponent', () => {
  let component: ContactStatusWidgetComponent;
  let fixture: ComponentFixture<ContactStatusWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactStatusWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactStatusWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
