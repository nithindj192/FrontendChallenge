import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstoriesComponent } from './newstories.component';

describe('NewstoriesComponent', () => {
  let component: NewstoriesComponent;
  let fixture: ComponentFixture<NewstoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewstoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
