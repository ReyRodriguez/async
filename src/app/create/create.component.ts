import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { User } from './../models/UserModel'
import * as UserActions from './../actions/user.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<any>) { }

  addTutorial(nombres, apellidos, usuario) {
    this.store.dispatch(new UserActions.AddUser({nombres: nombres, apellidos: apellidos, usuario: usuario}) )
  }

  ngOnInit() {
  }

}
