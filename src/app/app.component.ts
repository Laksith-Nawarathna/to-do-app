import { Component } from '@angular/core';

type ToDoItem = {
  checked: boolean,
  description: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  toDoItems: ToDoItem[] = [];

  toggleMode() : void{
    let element = document.body;
    element.classList.toggle("dark-mode");
  }

  addItem(description: string): void{
    this.toDoItems.push({
      checked: false,
      description: description
    });
  }

  getItems(complete: boolean = false): ToDoItem[]{
    return this.toDoItems.filter(item => item.checked === complete);
  }

  removeItem(item: ToDoItem): void{
    this.toDoItems.splice(this.toDoItems.indexOf(item), 1);
  }

}
