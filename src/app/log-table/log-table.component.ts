import { Component } from '@angular/core';
import {MatCell, MatColumnDef, MatHeaderCell, MatTable} from "@angular/material/table";

@Component({
  selector: 'app-log-table',
  standalone: true,
    imports: [
        MatCell,
        MatColumnDef,
        MatHeaderCell,
        MatTable
    ],
  templateUrl: './log-table.component.html',
  styleUrl: './log-table.component.scss'
})
export class LogTableComponent {

}
