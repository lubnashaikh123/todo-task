import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoItem!:string;
  todoArray : Array<string>=[];
  constructor(){}
onTodoAdd() {
       console.log(this.todoItem);
       this.todoArray.push(this.todoItem);
       this.todoItem='';

} 
  }

