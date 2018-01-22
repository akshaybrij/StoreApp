import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidwareComponent } from './midware.component';

describe('MidwareComponent', () => {
  let component: MidwareComponent;
  let fixture: ComponentFixture<MidwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
