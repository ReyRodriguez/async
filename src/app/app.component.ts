import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'apollo-link';
import { map } from 'rxjs/operators';
import { CurrentUsers } from 'src/User';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'async';

  users$
  data: any

  constructor(
    private apollo: Apollo,
  ) {}

  ngOnInit(): void {
    
    this.users$ = this.apollo.watchQuery<any>({
      query: CurrentUsers
    }).valueChanges.pipe(
      map(x => x.data.usuarios.data)
      
    )
    
  }

  

}