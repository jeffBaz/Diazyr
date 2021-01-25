import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseAdminDialogComponent } from './firebase-admin-dialog.component';

describe('FirebaseAdminDialogComponent', () => {
  let component: FirebaseAdminDialogComponent;
  let fixture: ComponentFixture<FirebaseAdminDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseAdminDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseAdminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
