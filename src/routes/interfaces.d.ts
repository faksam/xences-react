export interface RouteProps {
  history: {
    push: (path: string) => void;
  };
  product: Product;
  products?: Product[];
  trendingProducts?: Product[];
}
