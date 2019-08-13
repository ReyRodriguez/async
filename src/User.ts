import gql from 'graphql-tag';

// We use the gql tag to parse our query string into a query document
export const CurrentUsers = gql`
  query CurrentUsers {
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

export const DeteleUser = gql`
mutation usuarios($id: Int){
  usuarios(
    delete: {id: $id }
  ) {
    id
  }
}
`;

