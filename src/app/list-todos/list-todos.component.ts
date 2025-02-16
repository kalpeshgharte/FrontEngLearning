import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos =[
    new Todo(1,'Learn Angular',false, new Date()),
    new Todo(2,'Become an excellent front developer',false, new Date()),
    new Todo(3,'Become a pro developer',false, new Date()),
   // {id : 1 , description : 'Learn Angular'},
    //{id : 1 , description : 'Learn Angular'},
    //{id : 1 , description : 'Learn Angular'},
    //{id : 1 , description : 'Learn Angular'}
  ]
  // todo = {
  //   id : 1,
  //   description : 'Learn Angular'
  // }
  constructor() { }

  ngOnInit() {
  }

}
