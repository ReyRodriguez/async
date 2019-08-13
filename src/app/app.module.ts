import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { UserFormComponent } from './user-form/user-form.component';
import { TeplateDrivenFormComponent } from './teplate-driven-form/teplate-driven-form.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/user.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {
  NgrxCacheModule,
  NgrxCache,
  apolloReducer,
} from 'apollo-angular-cache-ngrx';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    TeplateDrivenFormComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({
      apollo: apolloReducer
    }),
    NgrxCacheModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(ngrxCache: NgrxCache) {
    const cache = ngrxCache.create({});
  }
 }
