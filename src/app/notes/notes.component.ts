import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  tasks = [];
  taskI: string;


  constructor(private http: HttpClient) {}

  submit() {
    this.tasks.push( {'sukaEbanoePole' : this.taskI});

    this.http.post('http://localhost:5000/api/Tasks',  {'sukaEbanoePole' : this.taskI} )
      .subscribe(() => {
      });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.http.get<any>('http://localhost:5000/api/Tasks')
    .subscribe((response) => {
      this.tasks = response;
    });
  }
}
