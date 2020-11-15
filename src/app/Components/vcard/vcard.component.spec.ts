import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VCardComponent } from './vcard.component';

describe('VCardComponent', () => {
  let component: VCardComponent;
  let fixture: ComponentFixture<VCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
