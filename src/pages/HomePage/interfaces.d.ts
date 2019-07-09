import Product from '../modules/products/interfaces';

export interface HomePageProps {
  history: {
    push: (path: string) => void;
  };
  product: Product;
  products?: Product[];
  trendingProducts?: Product[];
}
export interface HomePageState {
}
