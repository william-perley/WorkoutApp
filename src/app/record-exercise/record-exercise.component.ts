import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSlider} from "@angular/material/slider";
import {MatLabel} from "@angular/material/form-field";
import {MatSelect, MatSelectModule} from "@angular/material/select";
import {LogEntry} from "../services/api/models/log-entry";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-record-exercise',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatOption,
    MatSlider,
    MatLabel,
    MatSelect,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './record-exercise.component.html',
  styleUrl: './record-exercise.component.scss'
})
export class RecordExerciseComponent {
  exerciseControl = new FormControl<LogEntry | null>(null, Validators.required);

 area: LogEntry[] = [
   {muscleGroup: 'chest', exercise: 'bench'},
   {muscleGroup: 'legs', exercise: 'squat'}
 ]




}
