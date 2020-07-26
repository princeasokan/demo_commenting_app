import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentleveltwoComponent } from './commentleveltwo.component';

describe('CommentleveltwoComponent', () => {
  let component: CommentleveltwoComponent;
  let fixture: ComponentFixture<CommentleveltwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentleveltwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentleveltwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
