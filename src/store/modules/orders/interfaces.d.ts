// interfaces
import { User } from 'modules/users/interfaces';

export interface Order {
  id: string;
  total: string;
  status: string;
  orderNow: Boolean;
  user: User;
  createdAt: string | Moment;
}
