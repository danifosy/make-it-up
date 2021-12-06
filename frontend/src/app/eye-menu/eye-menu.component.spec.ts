import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeMenuComponent } from './eye-menu.component';

describe('EyeMenuComponent', () => {
  let component: EyeMenuComponent;
  let fixture: ComponentFixture<EyeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyeMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EyeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
