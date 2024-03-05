import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatTable} from "@angular/material/table";
import {LogTableComponent} from "../log-table/log-table.component";
import {RecordExerciseComponent} from "../record-exercise/record-exercise.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    LogTableComponent,
    RecordExerciseComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
