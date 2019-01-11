import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  tasks = [];
  taskI: string;


  events: string[] = [];
  opened: boolean;

  constructor(private http: HttpClient) {}

  submit() {
    this.tasks.push( {'sukaEbanoePole' : this.taskI});

    this.http.post('http://localhost:5000/api/Tasks',  {'sukaEbanoePole' : this.taskI} )
      .subscribe(() => {
      });
  }

  deleteNote(index: number){
    this.tasks.splice(index, 1);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.http.get<any>('http://localhost:5000/api/Tasks')
    .subscribe((response) => {
      this.tasks = response;
    });
  }
}
