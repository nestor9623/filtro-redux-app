import { Component, OnInit } from '@angular/core';
import { ToogleAllTodoAction } from './todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  compleado = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll() {
    this.compleado = !this.compleado;
    console.log(this.compleado);

    const accion = new ToogleAllTodoAction(this.compleado);
    this.store.dispatch(accion);
  }
}
