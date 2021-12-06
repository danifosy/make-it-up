import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipMenuComponent } from './lip-menu.component';

describe('LipMenuComponent', () => {
  let component: LipMenuComponent;
  let fixture: ComponentFixture<LipMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LipMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LipMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
