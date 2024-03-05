import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {LogEntry} from "../services/api/models/log-entry";
import {ExercisesService} from "../services/api/exercises.service";
import {HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import {KeyValuePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    KeyValuePipe,
    NgForOf
  ],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss'
})
export class ExercisesComponent implements OnInit{

  constructor(
    private service: ExercisesService
  ) {
  }

  muscleGroups: Record<string, LogEntry[]> = {};

  ngOnInit(){
    //This is using simple fetch requests.
    //let exercise = this.service.getAllExercises();
    //console.log(exercise);
    //
    //let chest = this.service.getChestExercises();
    //console.log(chest);

    //This is using observables.
    this.service.getLegExercises().subscribe(
      (data:Record<string, LogEntry[]>) =>{
        this.muscleGroups= data;
        console.log('Data', this.muscleGroups);
      },
      (error) =>{
        console.error('Error', error);
      }
    );
  }


}
