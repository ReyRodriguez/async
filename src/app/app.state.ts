import { User } from './models/UserModel';

export interface AppState {
  readonly user: User[];
}