import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordExerciseComponent } from './record-exercise.component';

describe('RecordExerciseComponent', () => {
  let component: RecordExerciseComponent;
  let fixture: ComponentFixture<RecordExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordExerciseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
