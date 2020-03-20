import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingGeneratorComponent } from './billing-generator.component';

describe('BillingGeneratorComponent', () => {
  let component: BillingGeneratorComponent;
  let fixture: ComponentFixture<BillingGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
