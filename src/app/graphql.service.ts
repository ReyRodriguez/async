import { Injectable } from '@angular/core';
import { Subscription } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService extends Subscription {
  
  document = gql`
  subscription CurrentUsers {
    usuarios {
      data {
        id
        nombres
        apellidos
        usuario
      }
    }
  }
  `;
}
