import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NailMenuComponent } from './nail-menu.component';

describe('NailMenuComponent', () => {
  let component: NailMenuComponent;
  let fixture: ComponentFixture<NailMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NailMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NailMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
