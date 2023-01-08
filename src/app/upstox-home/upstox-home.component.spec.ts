import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpstoxHomeComponent } from './upstox-home.component';

describe('UpstoxHomeComponent', () => {
  let component: UpstoxHomeComponent;
  let fixture: ComponentFixture<UpstoxHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpstoxHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpstoxHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
