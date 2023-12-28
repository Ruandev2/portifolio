import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseModuleComponent } from './firebase.module.component';

describe('FirebaseModuleComponent', () => {
  let component: FirebaseModuleComponent;
  let fixture: ComponentFixture<FirebaseModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirebaseModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirebaseModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
