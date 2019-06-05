import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTweetComponent } from './detalle-tweet.component';

describe('DetalleTweetComponent', () => {
  let component: DetalleTweetComponent;
  let fixture: ComponentFixture<DetalleTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleTweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
