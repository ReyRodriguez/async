import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { CurrentUsers } from 'src/User';
import { FormControl, FormGroup } from '@angular/forms';

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

  formUser;
  constructor(
    private apollo: Apollo) { }

  ngOnInit() {
    this.formUser  = new FormGroup({
      nombres: new FormControl(''),
      apellidos: new FormControl(''),
      usuario: new FormControl('')
    });
  }

  onSubmit() {
    this.apollo.mutate({
      mutation: createUser,
      variables: {
        "data": this.formUser.value
      },
      refetchQueries: [{
        query: CurrentUsers,
      }]
    }).subscribe(data => console.log(data))
  }

}
