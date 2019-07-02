import Product from '../../store/modules/products/interfaces';

export interface ProductCardProps {
  history: {
    push: (path: string) => void;
  };
  product: Product;
  products: Product[];
}
export interface ProductCardState {
}
