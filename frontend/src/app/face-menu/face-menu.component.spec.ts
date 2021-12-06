import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceMenuComponent } from './face-menu.component';

describe('FaceMenuComponent', () => {
  let component: FaceMenuComponent;
  let fixture: ComponentFixture<FaceMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
