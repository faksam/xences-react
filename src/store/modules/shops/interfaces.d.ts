// interfaces
import { User } from 'modules/users/interfaces';

export interface Shop {
  id: string;
  name: string;
  description: string;
  address: string;
  owner: User;
  createdAt: string | Moment;
}
