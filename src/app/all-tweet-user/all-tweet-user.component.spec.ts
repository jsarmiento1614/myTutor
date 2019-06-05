import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTweetUserComponent } from './all-tweet-user.component';

describe('AllTweetUserComponent', () => {
  let component: AllTweetUserComponent;
  let fixture: ComponentFixture<AllTweetUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTweetUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTweetUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
