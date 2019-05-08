// interfaces
import { Product } from 'modules/products/interfaces';

export interface DisplayCardProps {
  product: Product;
  type: string;
  [key: string]: any;
}
