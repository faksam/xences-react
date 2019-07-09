import Product from 'modules/products/interfaces';

export interface ProductCardProps {
  history: {
    push: (path: string) => void;
  };
  product: Product;
  products: Product[];
  cardSize?: string;
  displayProductSize?: Boolean;
}
export interface ProductCardState {
}
