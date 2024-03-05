import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LogEntry} from "./models/log-entry";
import {catchError, map, Observable, Observer, tap} from "rxjs";
import {group} from "@angular/animations";

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  private baseURL: string = 'https://raw.githubusercontent.com/william-perley/WorkoutApp/main/exercises';

  constructor(
    private http: HttpClient
  ) { }

  // async getAllExercises() {
  //   const exerciseUrl= await fetch(this.baseURL);
  //   const allList = await exerciseUrl.json();
  //   //console.log(allList);
  //   return allList;
  // }
  //
  // getChestExercises() {
  //   return this.http.get(this.baseURL).subscribe(
  //     (data:any) => {
  //       const chestExercises = data.muscleGroups.chest;
  //       console.log('chest exercises service', chestExercises);
  //     },
  //     (error) =>{
  //       console.error('Error: ', error);
  //     }
  //   );
  // }
  //
  // getLegExercises() {
  //   return new Observable((observer: Observer<any>) =>{
  //     this.http.get(this.baseURL).subscribe(
  //       (data:any) => {
  //         console.log('Data Received', data);
  //
  //         const muscleGroups = data.muscleGroups;
  //         observer.next(muscleGroups);
  //
  //
  //         observer.complete();
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //     }
  //   );
  //
  // }
  getAllExercises(): Observable<Record<string, {exercises: LogEntry[] }>> {
    return this.http.get<Record<string, {exercises: LogEntry[]}>>(this.baseURL).pipe(
      map(data => {
        if (!data || typeof data['muscleGroups'] === 'undefined') {
          return {};
        }
        return data['muscleGroups'];
      })
    );
  }

  // getChestExercises(): Observable<Record<string, LogEntry[]>> {
  //   return this.getAllExercises().pipe(
  //     map((data: LogEntry[]) => data.filter(entry => entry.muscleGroup === 'chest')),
  //     catchError((error: any) => {
  //       console.error('Error: ', error);
  //       throw error; // Rethrow the error to let the component handle it
  //     })
  //   );
  // }

  getLegExercises(): Observable<Record<string, LogEntry[]>> {
    return this.getAllExercises().pipe(
      map((data: Record<string, { exercises: LogEntry[] }>) => {
        const groupedByMuscle: Record<string, LogEntry[]> = {};

        for (const muscleGroup in data) {
          if (data.hasOwnProperty(muscleGroup)){
            groupedByMuscle[muscleGroup] = data[muscleGroup].exercises;
          }
        }
        console.log('gle', groupedByMuscle);
        return groupedByMuscle;
      }),

      catchError((error: any) => {
        console.error(error);
        throw error; // Rethrow the error to let the component handle it
      })
    );
  }
}
