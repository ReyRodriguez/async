import { Action } from '@ngrx/store'
import { User } from './../models/UserModel'
import * as UserActions from './../actions/user.actions'
import { CurrentUsers, DeteleUser } from 'src/User';
import { Apollo } from 'apollo-angular';



const initialState: User = {
    nombres: 'Rey',
    apellidos: 'Rodriguez',
    usuario: 'reydev'
}

export function reducer(state: User[] = [], action: UserActions.Actions) {

    
    switch(action.type) {
        case UserActions.ADD_USER:
            return [...state, action.payload];
        case UserActions.REMOVE_USER:
            state.splice(action.payload, 1)
            return state;
        default:
            return state;
    }
}