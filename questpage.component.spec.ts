import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestpageComponent } from './questpage.component';

describe('QuestpageComponent', () => {
  let component: QuestpageComponent;
  let fixture: ComponentFixture<QuestpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
