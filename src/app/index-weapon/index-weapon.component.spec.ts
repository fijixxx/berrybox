import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexWeaponComponent } from './index-weapon.component';

describe('IndexWeaponComponent', () => {
  let component: IndexWeaponComponent;
  let fixture: ComponentFixture<IndexWeaponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexWeaponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
