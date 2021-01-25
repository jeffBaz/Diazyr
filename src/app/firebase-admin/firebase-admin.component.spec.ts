import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseAdminComponent } from './firebase-admin.component';

describe('FirebaseAdminComponent', () => {
  let component: FirebaseAdminComponent;
  let fixture: ComponentFixture<FirebaseAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
