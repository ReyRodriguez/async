import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { CurrentUsers } from 'src/User';

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
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {

  constructor(
    private apollo: Apollo) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('holi')
    this.apollo.mutate({
      mutation: createUser,
      variables: {
        "data": {
          "nombres": "Hola3",
          "apellidos": "Hola3",
          "usuario": "hola3"
        }
      },
      refetchQueries: [{
        query: CurrentUsers,
      }]
    }).subscribe(data => console.log(data))
  }

}
