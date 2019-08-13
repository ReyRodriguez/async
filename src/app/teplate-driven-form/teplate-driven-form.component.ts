import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { Apollo } from 'apollo-angular';
import { CurrentUsers } from 'src/User';
import gql from 'graphql-tag';

const createUser = gql`
mutation usuarios($data: UsuarioInput) {
  usuarios(create: $data) {
      id
      nombres
      apellidos
      usuario
    }
  }
`;

@Component({
  selector: 'app-teplate-driven-form',
  templateUrl: './teplate-driven-form.component.html',
  styleUrls: ['./teplate-driven-form.component.scss']
})
export class TeplateDrivenFormComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  ngOnInit() {
  }

  user = new User();

  onSubmit() {

    this.apollo.mutate({
      mutation: createUser,
      variables: {
        "data": this.user
      },
      refetchQueries: [{
        query: CurrentUsers,
      }]
    }).subscribe(data => this.user = new User())
  }

}
