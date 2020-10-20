import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkoyawaComponent } from './akoyawa.component';

describe('AkoyawaComponent', () => {
  let component: AkoyawaComponent;
  let fixture: ComponentFixture<AkoyawaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkoyawaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkoyawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
