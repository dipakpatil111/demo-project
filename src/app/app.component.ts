import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todolist: any = [];
  itemName: any;

  ngOnInit() {
    let getLocal = localStorage.getItem('todolist');
    if (getLocal) this.todolist = JSON.parse(getLocal);
  }

  addItem() {
    if (this.itemName) {
      this.todolist.push({
        name: this.itemName,
        action: false,
      });
      localStorage.setItem('todolist', JSON.stringify(this.todolist));
      this.itemName = '';
    } else {
      alert('Please enter the task');
    }
  }

  remove(index: number) {
    let text = "Are you sure you want do delete?";
    if (confirm(text) == true) {
      this.todolist.splice(index, 1);
      localStorage.setItem('todolist', JSON.stringify(this.todolist));
    }
  }

  toggleCompleted(index: number) {
    this.todolist[index].action = !this.todolist[index].action;
    localStorage.setItem('todolist', JSON.stringify(this.todolist));
  }
}
