import User from '../modules/users/interfaces';

export interface AccountPageProps {
  currentUser: User;
  match: {
    path: string;
    url: string;
  };
}
export interface AccountPageState {
}
