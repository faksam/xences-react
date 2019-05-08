// interfaces
import { UserRole } from 'modules/userRoles/interfaces';

export interface User {
  id: string;
  fullname: string;
  email: string;
  phone: string;
  address: string;
  userRole: UserRole;
  createdAt: string | Moment;
}
