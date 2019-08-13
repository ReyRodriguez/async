import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { User } from './../models/UserModel';
import { AppState } from '../app.state'
import * as UserActions from './../actions/user.actions';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { CurrentUsers } from 'src/User';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  users$: Observable<User[]>

  constructor(private store: Store<any>, private apollo: Apollo) {
    
    this.store = store;
    apollo
      .query({
        query: CurrentUsers
      })
      .subscribe((initialData: any) => {
        console.log('wipi yeah', initialData.data.usuarios.data);
        this.users$ = initialData.data.usuarios.data;
        // this.users = store.select('user');
      });

   }

  ngOnInit() {
  }

  // delUser(index) {
  //   console.log('eliminando')
  //   this.store.dispatch(new UserActions.RemoveUser(index) )
  // }

}
